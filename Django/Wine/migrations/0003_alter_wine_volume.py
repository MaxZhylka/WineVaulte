# Generated by Django 5.0.4 on 2024-04-15 06:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Wine', '0002_wine_price_wine_producer'),
    ]

    operations = [
        migrations.AlterField(
            model_name='wine',
            name='volume',
            field=models.FloatField(verbose_name="Об'єм"),
        ),
    ]