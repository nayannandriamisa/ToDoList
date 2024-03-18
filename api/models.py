from django.db import models

# Create your models here.
class Tache(models.Model):
    intitule = models.CharField(max_length=250)
    complete = models.BooleanField(null=False, default=False)
    date_creation = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.intitule