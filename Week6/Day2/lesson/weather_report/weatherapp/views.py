from django.shortcuts import render
from weatherapp.models import Report
from weatherapp.serializers import ReportSerializer
from .models import Report

from rest_framework.response import Response
from rest_framework.views import APIView

# Create your views here.


class ReportView(APIView):
    def get(self, request, *args, **kwargs):
        reports = Report.objects.all()
        serializer = ReportSerializer(reports, many=True)
        return Response(data=serializer.data)