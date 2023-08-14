from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, JsonResponse
from rest_framework.parsers import JSONParser

from .models import Student
from .serializers import StudentSerializer

# from rest_framework.response import Response
# from rest_framework.views import APIView

# from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser, IsAuthenticatedOrReadOnly
# Create your views here.


@csrf_exempt
def student_list(request):
    if request.method == 'GET':
        students = Student.objects.all() 
        serializer = StudentSerializer(students, many=True) 
        return JsonResponse(serializer.data, safe=False)
    
    if request.method == 'POST':
        serializer = StudentSerializer(data=request.POST)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        else:
            JsonResponse({'error':'Invalid json data'})  
            
            
@csrf_exempt
def student_detail(request, student_pk):
    try:
        student = Student.objects.get(id=student_pk)
    except Student.DoesNotExist:
        return HttpResponse(status=404)     
        
    if request.method == 'GET':
        serializer = StudentSerializer(student) 
        return JsonResponse(serializer.data)
    
    if request.method == 'PUT':
        new_student = JSONParser(request)
        serializer = StudentSerializer(instance=student, data=new_student)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.error, status=400)

    if request.method == 'DELETE':
        student.delete()
        return HttpResponse(status=204) # Successfully deleted

