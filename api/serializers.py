from rest_framework import serializers
from api.models import Tache


class TacheSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tache
        fields = ('id', 'intitule', 'complete', 'description')
