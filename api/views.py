from django.shortcuts import render
# from django.http import HttpResponse
from rest_framework import generics, status
from .models import Tache
from .serializers import TacheSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.

@api_view(["GET"])
def viewTache(request):
    """
    Liste toutes les tâches
    """
    taches = Tache.objects.all().order_by('-id')
    serializer = TacheSerializer(taches, many=True)
    return Response(serializer.data)
