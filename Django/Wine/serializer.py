from rest_framework import serializers

from .models import Wine, Comment


class WineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wine
        fields = '__all__'

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'name', 'text', 'value', 'likes', 'reports', 'wine']

