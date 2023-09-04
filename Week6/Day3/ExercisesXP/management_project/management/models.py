from django.db import models
from django.contrib.auth.models import User

# Create your models here.
# CATEGORIES = [
#         ('sci', 'scientific'),
#         ('na', 'nature')]


# class Post(models.Model):
    
#     # author -> User
#     author = models.ForeignKey(User, on_delete=models.CASCADE)

#     title = models.CharField(max_length=50)
#     text = models.TextField(blank=True, default="")
#     created_at = models.DateField(auto_now_add=True)
#     category = models.CharField(max_length=3, choices=CATEGORIES)
    
#     def ___str___(self):
#         return f"{self.title}"


        
class Department(models.Model):

    name = models.CharField(max_length=50)
    description = models.TextField()
    
class Employee(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField()
    phone_number = models.CharField(max_length=20)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    projects = models.ManyToManyField('Project')
    
class Task(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    due_date = models.DateField()
    completed = models.BooleanField()
    project = models.ForeignKey('Project', on_delete=models.CASCADE)
    
class Project(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField()