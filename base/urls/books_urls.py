from django.urls import path
from base.views import books_views as view


urlpatterns = [
    
    path('', view.getBooks, name='get-all-books'),
    path('<str:pk>/', view.getBooks, name='get-book'),
    path('create/', view.createBook, name='create-book'),
    path('update/<str:pk>/', view.updateBook, name='update-book'),
    path('delete/<str:pk>/', view.deleteBook, name='delete-book'),
]