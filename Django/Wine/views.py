from django.shortcuts import render
from rest_framework import viewsets

from .models import Wine, Comment
from .serializer import WineSerializer, CommentSerializer


class WineApiView(viewsets.ModelViewSet):
    queryset = Wine.objects.all()
    serializer_class = WineSerializer
    http_method_names = ['get']
class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        wine_id = self.request.query_params.get('wine', None)
        if wine_id is not None:
            queryset = queryset.filter(wine__id=wine_id)
        return queryset
