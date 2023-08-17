from django.shortcuts import render
from .serializers import PostSerializer
from django.views.decorators.csrf import csrf_exempt
from .models import Post
from django.http import JsonResponse
from rest_framework.parsers import JSONParser

from rest_framework.response import Response
from rest_framework.views import APIView

from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser, IsAuthenticatedOrReadOnly

# from .permissions import IsAuthenticatedAndAdmin


class Rental View(APIView):
    
    permission_classes = {IsAuthenticatedAndAdmin, }
    
    
    def get(self, request, *args, **kwargs):
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)
    
    def post(self, request, *args, **kwargs):
        serializer = PostSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    
    def put(self, request, pk, *args, **kwargs):
        post = Post.objects.get(id=pk)
        serializer = PostSerializer(instance=post, data=request.data) 
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self, request, pk, *args, **kwargs):
        post = Post.objects.get(id=pk)
        post.delete()
        return Response({'message': f"Post id = {pk} DELETED"})



# class Student_list(APIView):
#     def get(self,request):
#         date_joined_param = request.GET.get('date_joined')
#         if date_joined_param:
#             students = Student.objects.filter(date_joined=date_joined_param)
#         else:
#             students = Student.objects.all()
#         serializer = StudentSerializer(students,many=True)
#         return Response(serializer.data)