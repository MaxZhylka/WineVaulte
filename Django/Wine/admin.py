from django.contrib import admin

from .models import Wine, Comment

# Register your models here.
admin.site.register(Wine)
admin.site.register(Comment)