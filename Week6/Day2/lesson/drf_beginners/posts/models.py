from django.db import models

# Create your models here.
class Post(models.Model):
    
    CATEGORIES = [
        ('sci', 'scientific'),
        ('na', 'nature'),
        
    ]
    
    
    title = models.CharField(max_length=50)
    text = models.TextField(blank=True, default="")
    created_at = models.DateField(auto_now_add=True)
    category = models.CharField(max_length=3, choices=CATEGORIES)
    
    def ___str___(self):
        return f"{self.title}"


        
        
                
    #title
    #text
    #created_at
    