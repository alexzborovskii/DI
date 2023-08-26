from django.db import models
from django.contrib.auth.models import User
from django.forms import ValidationError
from django.core.validators import MaxValueValidator, MinValueValidator, MinLengthValidator

# Create your models here.


class Book(models.Model):
    title = models.CharField(max_length=200, blank=False, null=False)
    author = models.CharField(max_length=50, blank=False, null=False)
    published_date = models.DateField(auto_now_add=False, blank=True, null=True)
    description = models.TextField(blank=False, null=False)
    page_count = models.PositiveIntegerField()
    categories = models.CharField(max_length=50)
    thumbnail_url = models.URLField(blank=True, null=True)
    
    def __str__(self):
        return self.id, self.title
       
    
class BookReview(models.Model):
    book = models.ForeignKey('Book', on_delete=models.CASCADE, null=True, related_name='review')
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=False)
    rating = models.PositiveIntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
    review_text = models.TextField(MinLengthValidator(10), blank=False, null=False)
    
    def __str__(self):
        return self.title
