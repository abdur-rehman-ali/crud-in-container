from django.db import models
from django.utils import timezone
import uuid
from django_prometheus.models import ExportModelOperationsMixin


class Product(ExportModelOperationsMixin('product'), models.Model):
    class Category(models.TextChoices):
        ELECTRONICS = "Electronics", "Electronics"
        CLOTHING = "Clothing", "Clothing"
        BOOKS = "Books", "Books"
        HOME = "Home & Garden", "Home & Garden"
        SPORTS = "Sports", "Sports"
        BEAUTY = "Beauty", "Beauty"
        TOYS = "Toys", "Toys"
        OTHER = "Other", "Other"

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=200)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    category = models.CharField(
        max_length=50, choices=Category.choices, default=Category.OTHER
    )
    in_stock = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-created_at"]
        indexes = [
            models.Index(fields=["category"]),
            models.Index(fields=["in_stock"]),
            models.Index(fields=["created_at"]),
        ]

    def __str__(self):
        return f"{self.name}"
