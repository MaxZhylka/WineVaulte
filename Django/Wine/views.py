from django.shortcuts import render
from rest_framework import viewsets

from .models import Wine
from .serializer import WineSerializer



class WineApiView(viewsets.ModelViewSet):
    queryset = Wine.objects.all()
    serializer_class = WineSerializer
    http_method_names = ['get']