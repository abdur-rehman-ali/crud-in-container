from django.contrib import admin
from .models import Product


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ("name", "category", "price", "in_stock", "created_at")
    list_filter = ("category", "in_stock", "created_at")
    search_fields = ("name", "description")
    list_editable = ("price", "in_stock")
    readonly_fields = ("id", "created_at", "updated_at")
    fieldsets = (
        (None, {"fields": ("id", "name", "description")}),
        ("Pricing & Category", {"fields": ("price", "category", "in_stock")}),
        (
            "Timestamps",
            {"fields": ("created_at", "updated_at"), "classes": ("collapse",)},
        ),
    )
