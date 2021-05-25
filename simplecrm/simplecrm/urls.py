"""simplecrm URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from crmapp import views

urlpatterns = [
    path('', views.Hello,name='home'),
    path('admin/', admin.site.urls),
    path(r'Accounts/',views.getAccount, name='account-list'),
    path(r'Accounts/create/', views.createAccount, name='Create Account'),
    path(r'Accounts/get/<str:pk>/', views.getIndividualAccount, name='Individual Account'),
    path(r'Accounts/get/updateAccount/<str:pk>/', views.updateAccount,name='Update Account'),
     path(r'Accounts/deleteAccount/<str:pk>/', views.deleteAccount,name='delete Account'),
]
