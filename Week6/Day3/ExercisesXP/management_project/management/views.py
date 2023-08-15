from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import DepartmentSerializer, EmployeeSerializer, TaskSerializer, ProjectSerializer
from .models import Department, Employee, Project, Task


class DepartmentAPIView(APIView):

    def get(self, request, *args, **kwargs):
        departments = Department.objects.all()
        serializer = DepartmentSerializer(departments, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = DepartmentSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def put(self, request, pk, *args, **kwargs):
        department = Department.objects.get(id=pk)
        serializer = DepartmentSerializer(
            instance=department, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self, request, pk, *args, **kwargs):
        department = Department.objects.get(id=pk)
        department.delete()
        return Response({'message': f"Department id = {pk} DELETED"})


class EmployeeAPIView(APIView):

    def get(self, request, *args, **kwargs):
        employees = Employee.objects.all()
        serializer = EmployeeSerializer(employees, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = EmployeeSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def put(self, request, pk, *args, **kwargs):
        employee = Employee.objects.get(id=pk)
        serializer = EmployeeSerializer(
            instance=employee, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self, request, pk, *args, **kwargs):
        employee = Employee.objects.get(id=pk)
        employee.delete()
        return Response({'message': f"Employee id = {pk} DELETED"})


class TaskAPIView(APIView):

    def get(self, request, *args, **kwargs):
        tasks = Task.objects.all()
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = TaskSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def put(self, request, pk, *args, **kwargs):
        task = Task.objects.get(id=pk)
        serializer = TaskSerializer(instance=task, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self, request, pk, *args, **kwargs):
        task = Task.objects.get(id=pk)
        task.delete()
        return Response({'message': f"Task id = {pk} DELETED"})


class ProjectAPIView(APIView):

    def get(self, request, *args, **kwargs):
        projects = Project.objects.all()
        serializer = ProjectSerializer(projects, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = ProjectSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def put(self, request, pk, *args, **kwargs):
        project = Project.objects.get(id=pk)
        serializer = ProjectSerializer(instance=project, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self, request, pk, *args, **kwargs):
        project = Project.objects.get(id=pk)
        project.delete()
        return Response({'message': f"Project id = {pk} DELETED"})
