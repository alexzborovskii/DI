from django.shortcuts import render
from .serializers import PostSerializer
from django.views.decorators.csrf import csrf_exempt
from .models import Post
from django.http import JsonResponse
from rest_framework.parsers import JSONParser

from rest_framework.response import Response
from rest_framework.views import APIView

from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser, IsAuthenticatedOrReadOnly

class PostView(APIView):
    
    permission_classes = {IsAuthenticated,}
    
    
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
        #applying changes from request.data to the instance (post)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self, request, pk, *args, **kwargs):
        post = Post.objects.get(id=pk)
        post.delete()
        return Response({'message': f"Post id = {pk} DELETED"})












# Create your views here.

@csrf_exempt
def post_view(request):
    if request.method == 'GET': # if client tries to get data out of the website
        posts = Post.objects.all() # all of the data (django)
        serializer = PostSerializer(posts, many=True) # translate all data into json format
        return JsonResponse(serializer.data, safe=False) # pass all of the data to the browser
    
    if request.method == 'POST':
        # data = JSONParser.parse(request) # dict with data from POST request
        # print('Data after parsing: ', data)
        serializer = PostSerializer(data=request.POST)
        # print(serializer)
        if serializer.is_valid(): #true if data in the serializer is OK
            serializer.save()
            return JsonResponse(serializer.data)
        else:
            JsonResponse('error','Invalid json data')  
        
        
        
    # PUT - for updating
    if request.method == 'PUT':
        pass
    # DELETE - for deleting
    if request.method == 'DELETE':
        pass


            