from rest_framework import serializers
from .models import Department, Employee, Task, Project


class DepartmentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Department
        fields = ('name', 'description')

# class DepartmentSerializer2(serializers.HyperlinkedModelSerializer ):
#     url = serializers.HyperlinkedIdentityField(view_name='department-detail')
    
#     class Meta:
#         model = Department
#         fields = ('url', 'name', 'description')

class EmployeeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Employee
        fields = ('name', 'email', 'phone_number', 'department', 'projects')


class TaskSerializer(serializers.ModelSerializer):

    class Meta:
        model = Task
        fields = ('name', 'description', 'due_date', 'completed', 'project')


class ProjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = Project
        fields = ('name', 'description', 'start_date', 'end_date')
