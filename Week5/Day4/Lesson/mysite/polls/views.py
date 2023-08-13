from django.shortcuts import render
from django.http import HttpResponse
from .models import Author, Post, Category


# Create your views here.
def index(request):
    message = """"Hello, this is my first page"""
    return HttpResponse(message)

def post(request, post_id:int):
    try:
        post = Post.objects.get(id = post_id)
        content = f"AUTHOR: {post.author.name} | TITLE: {post.title} | Text: {post.text}"
        return HttpResponse(content)
    except Post.DoesNotExist:
        return HttpResponse("No such post")

def about(request):
    message = """<h1>This is about page
    Just a little exercise.</h1>\n"""
    return HttpResponse(message)

#create a view where we get all of the post of a certain author

def all_posts(request, author_name:str):
    author_name = author_name.capitalize()
    try:
        author = Author.objects.get(name=author_name)
        author_posts = author.post_set.all()
        
        content = ""

        for post in author_posts:
            content += post.title + '\n'

        return HttpResponse(content)
    
    except Author.DoesNotExist:
        return HttpResponse("No such author")


def category_posts(request, category_id:int):
    try:
        category = Category.objects.get(id=category_id)
        posts = category.posts.all()
        content = ""
        for post in posts:
            content += f'{post.title} - {post.author.name}</br>'
        return HttpResponse(content)
    except Category.DoesNotExist:
        return HttpResponse("No such category")