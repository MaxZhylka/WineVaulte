# Generated by Django 5.0.4 on 2024-04-21 13:59

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Wine', '0004_wine_color'),
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('text', models.TextField()),
                ('value', models.IntegerField(default=0)),
                ('likes', models.IntegerField(default=0)),
                ('reports', models.IntegerField(default=0)),
                ('wine', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comments', to='Wine.wine')),
            ],
        ),
    ]
