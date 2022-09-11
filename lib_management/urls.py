
from ensurepip import version
from turtle import title
from django.contrib import admin
from django.urls import path, include
from rest_framework.schemas import get_schema_view



urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('base.urls.user_urls')),
    path('api/books/', include('base.urls.books_urls')),
    
    path('schema', get_schema_view(
        title="library_management_system",
        description = "API for the library-management-system ...",
        version="1.0.0"
        ), name="openapi-schema"),

]
