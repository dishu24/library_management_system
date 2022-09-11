
from base.models import User
from base.serializers import  UserSerializerWithToken
from rest_framework.response import Response
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.decorators import api_view

from django.contrib.auth.hashers import make_password
from rest_framework import status


# Create your views here.


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        serializer = UserSerializerWithToken(self.user).data
        
        for k, v in serializer.items():
            data[k] = v

        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['POST'])
def registerUser(request):
    data = request.data
    try:
        user = User.objects.create(
            email=data['email'],
            name= data['name'],
            password = make_password(data['password'])
        )
        print(user)
        serializer = UserSerializerWithToken(user, many=False)
        return Response(serializer.data)
    except:
        return Response({'message':'Email already exist'})
    
