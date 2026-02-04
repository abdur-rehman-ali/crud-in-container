from rest_framework import serializers
from .models import Product


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = [
            "id",
            "name",
            "description",
            "price",
            "category",
            "in_stock",
            "created_at",
            "updated_at",
        ]
        read_only_fields = ["id", "created_at", "updated_at"]

    def validate_price(self, value):
        if value < 0:
            raise serializers.ValidationError("Price cannot be negative.")
        if value > 1000000:
            raise serializers.ValidationError("Price is too high.")
        return value

    def validate_name(self, value):
        if len(value) < 2:
            raise serializers.ValidationError(
                "Name must be at least 2 characters long."
            )
        return value
