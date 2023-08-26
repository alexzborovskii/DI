from django.forms import model_to_dict
from django.shortcuts import render

from django.http import HttpResponse, JsonResponse
from .models import Book, BookReview


def list_books(request):
    all_books = Book.objects.all()
    books_dict = [model_to_dict(book) for book in all_books] 
    return JsonResponse(books_dict, safe=False)


def book_detail(request, book_id:int):
    book = Book.objects.get(id=book_id)
    book_dict = model_to_dict(book)
    return JsonResponse(book_dict)



