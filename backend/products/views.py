from rest_framework import viewsets, status, filters
from rest_framework.response import Response
from rest_framework.decorators import action
from products.models import Product
from products.serializers import ProductSerializer
from django.shortcuts import get_object_or_404
from django.db.models import Count, Avg, Min, Max, Q


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [
        filters.SearchFilter,
        filters.OrderingFilter,
    ]
    filterset_fields = ["category", "in_stock"]
    search_fields = ["name", "description"]
    ordering_fields = ["name", "price", "created_at"]
    ordering = ["-created_at"]

    def get_queryset(self):
        queryset = super().get_queryset()

        min_price = self.request.query_params.get("min_price")
        max_price = self.request.query_params.get("max_price")

        if min_price:
            queryset = queryset.filter(price__gte=min_price)
        if max_price:
            queryset = queryset.filter(price__lte=max_price)

        return queryset

    @action(detail=False, methods=["get"])
    def stats(self, request):
        """Get product statistics"""

        stats = Product.objects.aggregate(
            total_products=Count("id"),
            avg_price=Avg("price"),
            min_price=Min("price"),
            max_price=Max("price"),
            in_stock_count=Count("id", filter=Q(in_stock=True)),
            out_of_stock_count=Count("id", filter=Q(in_stock=False)),
        )

        category_stats = (
            Product.objects.values("category")
            .annotate(count=Count("id"))
            .order_by("-count")
        )

        stats["categories"] = list(category_stats)

        return Response(stats)
