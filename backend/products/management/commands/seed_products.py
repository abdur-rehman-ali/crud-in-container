from django.core.management.base import BaseCommand
from products.models import Product
from faker import Faker
import random


class Command(BaseCommand):
    help = "Seed the database with dummy products"

    def add_arguments(self, parser):
        parser.add_argument(
            "--count",
            type=int,
            default=100,
            help="Number of products to create",
        )
        parser.add_argument(
            "--clear",
            action="store_true",
            help="Clear all products before seeding",
        )

    def handle(self, *args, **options):
        fake = Faker()
        count = options["count"]
        clear = options["clear"]

        if clear:
            self.stdout.write(self.style.WARNING("Clearing all products..."))
            Product.objects.all().delete()
            self.stdout.write(self.style.SUCCESS("All products cleared!"))

        self.stdout.write(f"Creating {count} products...")
        categories = [choice[0] for choice in Product.Category.choices]
        batch_size = 1000
        products = []

        for i in range(count):
            product = Product(
                name=fake.catch_phrase(),
                description=fake.text(max_nb_chars=200),
                price=round(random.uniform(1.0, 1000.0), 2),
                category=random.choice(categories),
                in_stock=random.choice([True, False]),
            )
            products.append(product)

            if len(products) >= batch_size:
                Product.objects.bulk_create(products)
                self.stdout.write(f"Created {i+1} products...")
                products = []

        if products:
            Product.objects.bulk_create(products)

        self.stdout.write(self.style.SUCCESS(f"Successfully created {count} products!"))
