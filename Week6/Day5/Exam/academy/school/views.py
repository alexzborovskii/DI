from django.http import JsonResponse
from django.shortcuts import render
from .models import Teacher, Course
from .serializer import TeacherSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
# Create your views here.


def course_details(request, course_id:int):
    course = Course.objects.get(id=course_id)
    return JsonResponse({"course_name": course.course_name, "teacher": course.teacher})

class TeacherAPIView(APIView):


    def get(self, request, *args, **kwargs):
        teachers = Teacher.objects.all()
        serializer = TeacherSerializer(teachers, many=True)
        return Response(serializer.data)