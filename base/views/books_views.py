from functools import partial
from base.models import Book
from base.serializers import BookSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.decorators import api_view
from rest_framework import status


# Create your views here.


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getBooks(request, pk=None):
    if pk is not None:
        book = Book.objects.get(id=pk)
        serializer = BookSerializer(book, many=False)
    else:
        books = Book.objects.all()
        serializer = BookSerializer(books, many=True)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAdminUser])
def createBook(request):
    data = request.data
    book = Book.objects.create(
        title = data['title'],
        author = data['author'],
        quantity = data['quantity']
    )
    serializer = BookSerializer(book, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updateBook(request, pk):
    data= request.data
    book = Book.objects.get(id=pk)
    book.title = data['title']
    book.author = data['author']
    book.quantity = data['quantity']
    book.save()
    serializer = BookSerializer(book, many=False, partial=True)
    return Response(serializer.data) 


@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteBook(request, pk):
    book = Book.objects.get(id=pk)
    book.delete()
    return Response({'message':'Book Deleted Successfully'})