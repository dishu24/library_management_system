from django.contrib import admin

from base.models import Book, User

# Register your models here.

admin.site.register(Book)
admin.site.register(User)