from django.db import models
from django.contrib.auth.models import User

# Create your models here.
CATEGORIES = [
        ('sci', 'scientific'),
        ('na', 'nature')]


class Post(models.Model):
    
    # author -> User
    author = models.ForeignKey(User, on_delete=models.CASCADE)


    title = models.CharField(max_length=50)
    text = models.TextField(blank=True, default="")
    created_at = models.DateField(auto_now_add=True)
    category = models.CharField(max_length=3, choices=CATEGORIES)
    
    def ___str___(self):
        return f"{self.title}"


        
        
                
    #title
    #text
    #created_at
    