from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register('', views.ViewTasksApi, 'view_tasks')

urlpatterns = [
    path('', include(router.urls)),
]
