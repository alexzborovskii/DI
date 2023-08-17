from django.db import models

# Create your models here.
class Teacher(models.Model):
    name = models.CharField(50)
    
    
class Course(models.Model):
    course_name = models.CharField(50)
    course_code = models.CharField(10)
    teacher = models.ManyToManyField('Teacher')
    

class SchoolFacility(models.Model):
    facility_name = models.CharField(50)
    usage_purpose = models.TextField()
    
class Laboratory(SchoolFacility):
    equipment_list = models.TextField()

