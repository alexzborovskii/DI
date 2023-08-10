from django.shortcuts import render
from django.http import HttpResponse
from .models import Author, Post


# Create your views here.
def index(request):
    message = """"Hello, this is my first page"""
    return HttpResponse(message)

def post(request, post_id:int):
    data= {
        1: "This is the 1st post",
            
        2: "This is the 2st post"
        
    }
    post = data.get(post_id, "No such post")
    return HttpResponse(post)

def about(request):
    message = """<h1>This is about page
    Just a little exercise.</h1>\n"""
    return HttpResponse(message)

#create a view where we get all of the post of a certain author

def all_posts(request, author_name:str):
    # all_posts_list = Post.objects.all()
    author_name = author_name.lower()
    try:
        author = Author.objects.get(name=author_name)
        author_posts = author.post_set.all()
        content = ""
        for post in author_posts:
            content += post.title() + '\n'
            return HttpResponse(content)
    except Author.DoesNotExist:
        return HttpResponse('No such author')