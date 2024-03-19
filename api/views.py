# from django.shortcuts import render
# from django.http import HttpResponse
# from django.shortcuts import redirect
# from rest_framework.response import Response
# from rest_framework.decorators import api_view
from rest_framework import viewsets
from .models import Tache
from .serializers import TacheSerializer


# Create your views here.
class ViewTasksApi(viewsets.ModelViewSet):
    serializer_class = TacheSerializer
    queryset = Tache.objects.all()

'''
@api_view(['POST'])
def view_create_task(request):
    """
    Formulaire de création d'une tâche (CREATE)
    """
    serializer = TacheSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)


@api_view(["GET"])
def view_all_task(request):
    """
    Liste toutes les tâches (READ)
    """
    taches = Tache.objects.all().order_by('-id')
    serializer = TacheSerializer(taches, many=True)
    return Response(serializer.data)

@api_view(["POST"])
def view_update_task(request, id):
    """
    Met à jour une  tâche (UPDATE)
    """
    tache = Tache.objects.get(id=id)
    serializer = TacheSerializer(instance=tache, data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(["DELETE"])
def view_delete_task(request, id):
    """
    Supprime une tâche (DELETE)
    """
    tache = Tache.objects.get(id=id)
    tache.delete()
    return Response("Suppression effectuée")
'''