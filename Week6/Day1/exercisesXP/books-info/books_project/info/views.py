from django.shortcuts import render

from django.http import HttpResponse, JsonResponse
from .models import Book, BookReview
import requests


def list_books(request):
    books_list = Book.objects.all()
    content = ", ".join(books_list)
    return JsonResponse({"books": content})

def book_detail(request, book_id:int):
    book = Book.objects.get(id=book_id)
    return JsonResponse({"title": book.title, "author": book.author, "published_date": book.published_date, "description": book.description})

