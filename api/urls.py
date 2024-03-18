from django.urls import path, include
from .views import viewTache

urlpatterns = [
    path('home', viewTache, name='viewTache'),
]
