

from django.urls import include, path
from rest_framework import routers

from .views import WineApiView, CommentViewSet

router = routers.DefaultRouter()
router.register(r'api/wines', WineApiView, basename='wines')
router.register(r'comments', CommentViewSet)
urlpatterns = [
    path('', include(router.urls))

]