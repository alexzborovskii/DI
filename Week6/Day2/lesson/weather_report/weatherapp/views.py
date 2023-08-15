from django.shortcuts import render

from .permissions import IsForecaster
from .serializers import ReportSerializer
from .models import Report
from rest_framework.views import APIView
from rest_framework.response import Response

class ReportView(APIView):
    
    permission_classes = {IsForecaster, }

    def get(self, request, *args, **kwargs):
        reports = Report.objects.all()
        serializer = ReportSerializer(reports, many=True)
        return Response(data=serializer.data)
    
    def post(self, request, *args, **kwargs): # For creating something new in the database
        serializer = ReportSerializer(data=request.data) # GET/POST

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors) # Show the errors of the serializer

    def put(self, request, pk, *args, **kwargs): # Updating something in the database
        report = Report.objects.get(id=pk)
        serializer = ReportSerializer(instance=report, data=request.data) 
        # applying changes from request.data to the instance (report)
        if serializer.is_valid():
            serializer.save() # update the instance
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self, request, pk, *args, **kwargs):
        report = Report.objects.get(id=pk)
        
        self.check_object_permissions(request, report) # check has_object_permission on the report
        
        
        report.delete()
        return Response({'message': f'Report id - {pk} DELETED'})