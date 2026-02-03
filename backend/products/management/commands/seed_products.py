from django.core.management.base import BaseCommand
from products.models import Product


class Command(BaseCommand):
    help = "Seed the database with dummy products"

    def add_arguments(self, parser):
        parser.add_argument(
            "--count",
            type=int,
            default=10000,
            help="Number of products to create",
        )
        parser.add_argument(
            "--clear",
            action="store_true",
            help="Clear all products before seeding",
        )

    def handle(self, *args, **options):
        count = options["count"]
        clear = options["clear"]

        if clear:
            self.stdout.write(self.style.WARNING("Clearing all products..."))
            Product.objects.all().delete()
            self.stdout.write(self.style.SUCCESS("All products cleared!"))
