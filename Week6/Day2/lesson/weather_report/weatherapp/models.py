from django.db import models

# Create your models here.
CATEGORIES = [
    ('su', 'sunny'),
    ('clo', 'cloudly'),
    ('wi', 'windy'),
    ('ra', 'rainy'),
    ('str', 'stormy')
    
]


class Report(models.Model):
    location = models.CharField(max_length=50)
    temperature = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)
    type = models.CharField(max_length=3, choices=CATEGORIES)