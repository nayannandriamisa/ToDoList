from django.urls import path, include
from . import views

urlpatterns = [
    path('home', views.viewTache, name='viewTache'),
    path('home/form', views.viewFormTache, name='viewFormTache'),
    path('react', views.viewReact, name='viewReact')
]
