import os
from django.db import models
from django.conf import settings
from django.contrib.postgres.fields import ArrayField
from django.utils import timezone


class Wine(models.Model):
    name=models.CharField('Назва Вина',max_length=30)
    count=models.IntegerField('Кількість на складі')
    image=models.ImageField('Картинка')
    color=models.CharField('Колір',max_length=30)
    sugar=models.CharField('Солодкість',max_length=30)
    country=models.CharField('Країна походження', max_length=30)
    producer=models.CharField('Компанія виробник', max_length=30)
    description=models.TextField('Опис')
    fullDescription=models.TextField('Повний опис')
    volume=models.FloatField("Об'єм")
    strength=models.IntegerField("Крепкость")
    exposureTime=models.CharField("Час витримки",max_length=30)
    price=models.FloatField("Ціна")
    def __str__(self):
     return self.name
    class Meta:
        verbose_name = 'Вино'
        verbose_name_plural = 'Вина'
class Comment(models.Model):
    wine = models.ForeignKey(Wine, on_delete=models.CASCADE, related_name='comments')
    name = models.CharField(max_length=100)
    text = models.TextField()
    value = models.IntegerField(default=0)
    likes = models.IntegerField(default=0)
    reports = models.IntegerField(default=0)

    def __str__(self):
        return f'{self.name}: {self.text[:20]}...'