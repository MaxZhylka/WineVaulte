

from django.urls import include, path
from rest_framework import routers

from .views import WineApiView

router = routers.DefaultRouter()
router.register(r'api/wines', WineApiView, basename='wines')
urlpatterns = [
    path('', include(router.urls))
]