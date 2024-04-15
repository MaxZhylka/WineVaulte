# Generated by Django 5.0.4 on 2024-04-15 06:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Wine', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='wine',
            name='price',
            field=models.FloatField(default=0, verbose_name='Ціна'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='wine',
            name='producer',
            field=models.CharField(default=1, max_length=30, verbose_name='Компанія виробник'),
            preserve_default=False,
        ),
    ]
