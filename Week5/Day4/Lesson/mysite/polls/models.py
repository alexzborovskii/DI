from django.db import models

# Create your models here.




class Post(models.Model):
    author = models.CharField(max_length=50)
    title = models.CharField(max_length=50)
    text = models.TextField()
    time_created = models.DateTimeField(auto_now_add=True)
    
# migration - instraction for the DB about changes (adding table, changing a column)

# python manage.py makemigrations
# python manage.py migrate


### create project
#django-admin startproject <name>

### manage.py commands:
# startapp - create an app inside the project (polls)
# runserver
# make migrations
# migrate
# createsuperuser - create an admin user that has all permissions
# shell




### shell commands

##1instance
# Post.objects.get(id) # 1 object
# .save()

## many instances
# Post.objects.all() # all objects
# .filter()
# .order_by()
