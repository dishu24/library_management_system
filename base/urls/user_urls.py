from django.urls import path
from base.views import user_views as view


urlpatterns = [
    
    path('', view.MyTokenObtainPairView.as_view(), name='login-user'),

    path('register/',view.registerUser, name='register-user'),
    
]