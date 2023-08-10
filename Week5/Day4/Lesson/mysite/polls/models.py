from django.db import models

# Create your models here.




class Post(models.Model):
    # author = models.CharField(max_length=50)
    title = models.CharField(max_length=50)
    text = models.TextField()
    time_created = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey('Author', on_delete=models.CASCADE, null=True)
    
    
# author
class Author(models.Model):
    name = models.CharField(max_length=50) #by def null not allowed
    email = models.EmailField(blank=True, null=True) # dont have to provide value for the field
    
    
### SHELL COMMANDS
# to acess parents (author) connected instances (Posts):
#bill.post_set.all() <- get all posts of bill
#bill.post_set.get(title='First Post') <- get 'First Post' post of Bill

# to connect the parent (author) through the connected instance (Post)
# post1.author <- return an author object of bill

    
    
    
    
    
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
