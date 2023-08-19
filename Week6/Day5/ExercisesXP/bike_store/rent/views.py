from django.shortcuts import render
from .serializers import CustomerSerializer, RentalSerializer, VehicleSerializer, RentalStationSerializer, VehicleAtRentalStationSerializer
from django.views.decorators.csrf import csrf_exempt
from .models import Customer, Vehicle, VehicleType, VehicleSize, Rental, RentalRate, RentalStation, Address, VehicleAtRentalStation
from django.http import JsonResponse
from rest_framework.parsers import JSONParser

from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny

### 1
class RentalList(APIView):

    permission_classes = [AllowAny]

    def get(self, request):
        # pk_param = request.GET.get('pk')
        # if pk_param:
        #     rentals = Rental.objects.get(id=pk_param)
        # else:
        # rentals = Rental.objects.all().order_by('return_date', 'rental_date')
        rentals = Rental.objects.all().order_by('return_date', 'rental_date')
        serializer = RentalSerializer(rentals, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = RentalSerializer(data=request.data)
        if serializer.is_valid():
            if (Customer.objects.get(request.id)):
                serializer.save()
                return Response(serializer.data)
        return Response(serializer.errors)

### 2
class RentalDetail(APIView):

    permission_classes = [AllowAny]

    def get(self, request, pk, *args, **kwargs):
        rentals = Rental.objects.get(id=pk)
        serializer = RentalSerializer(rentals, many=False)
        return Response(serializer.data)
    
    def put(self, request, pk, *args, **kwargs):
        rental = Rental.objects.get(id=pk)
        serializer = RentalSerializer(instance=rental, data=request.data) 
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self, request, pk, *args, **kwargs):
        post = Rental.objects.get(id=pk)
        post.delete()
        return Response({'message': f"Rental id = {pk} DELETED"})
    

### 3
class CustomerList(APIView):

    permission_classes = [AllowAny]

    def get(self, request):
        customers = Customer.objects.all().order_by('last_name', 'first_name')
        serializer = CustomerSerializer(customers, many=True)
        return Response(serializer.data)


### 4
class CustomerAdd(APIView):

    permission_classes = [AllowAny]

    def get(self, request):
        customers = Customer.objects.all().order_by('last_name', 'first_name')
        serializer = CustomerSerializer(customers, many=True)
        return Response(serializer.data)
    
    def post(self, request, *args, **kwargs):
        serializer = CustomerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    
### 5
class VehicleList(APIView):

    permission_classes = [AllowAny]

    def get(self, request):
        vehicles = Vehicle.objects.all().order_by('vehicle_type')
        serializer = VehicleSerializer(vehicles, many=True)
        return Response(serializer.data)
    
### 6

class VehicleDetail(APIView):

    permission_classes = [AllowAny]

    def get(self, request, pk, *args, **kwargs):
        vehicle = Vehicle.objects.get(id=pk)
        serializer = VehicleSerializer(vehicle, many=False)
        return Response(serializer.data)
    
    def put(self, request, pk, *args, **kwargs):
        vehicle = Vehicle.objects.get(id=pk)
        serializer = VehicleSerializer(instance=vehicle, data=request.data) 
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self, request, pk, *args, **kwargs):
        vehicle = Vehicle.objects.get(id=pk)
        vehicle.delete()
        return Response({'message': f"Vehicle id = {pk} DELETED"})
    
### 7

class VehicleAdd(APIView):

    permission_classes = [AllowAny]

    def get(self, request):
        vehicle = Vehicle.objects.all()
        serializer = VehicleSerializer(vehicle, many=True)
        return Response(serializer.data)
    
    def post(self, request, *args, **kwargs):
        serializer = VehicleSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    
### 8

class RentalStationList(APIView):

    permission_classes = [AllowAny]

    def get(self, request):
        rental_stations = RentalStation.objects.all()
        serializer = RentalStationSerializer(rental_stations, many=True)
        return Response(serializer.data)
    
### 9

class RentalStationAdd(APIView):

    permission_classes = [AllowAny]

    def get(self, request):
        stations = RentalStation.objects.all()
        serializer = RentalStationSerializer(stations, many=True)
        return Response(serializer.data)
    
    def post(self, request, *args, **kwargs):
        serializer = RentalStationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    
### 10
class RentalStationDetail(APIView):

    permission_classes = [AllowAny]

    def get(self, request, pk, *args, **kwargs):
        rentals = RentalStation.objects.get(id=pk)
        serializer = RentalStationSerializer(rentals, many=False)
        return Response(serializer.data)
    
    
### 11
class VehicleDistribution(APIView):

    permission_classes = [AllowAny]


    def get(self, request, *args, **kwargs):
        aggr_res = VehicleAtRentalStation.objects.all().filter(departure_date=None)
        aggr_res2 = aggr_res.values('rental_station').annotate(total=Count('id')).order_by('-total')
        for item in aggr_res2:
            item['rental_station'] = RentalStation.objects.get(id=item['rental_station']).name
        return Response(aggr_res2)
        
### 12 -  ???
# Distributes vehicles among stations. 
# Respond with a confirmation message upon successful distribution.



    
###############################
####### Daily Challenge #######
###############################

# 1 Monthly Rental Stats Endpoint

from django.db.models import Count
from django.db.models.functions import TruncMonth


class RentalStat(APIView):

    permission_classes = [AllowAny]

    def get(self, request, *args, **kwargs):
        return Response(Rental.objects.annotate(month=TruncMonth('rental_date')).values('month').annotate(total=Count('id')).order_by())

# 2 Popular Rental Station Endpoint

class PopularRentalStation(APIView):

    permission_classes = [AllowAny]

    def get(self, request, *args, **kwargs):
        aggr_res = VehicleAtRentalStation.objects.values('rental_station').annotate(total=Count('id')).order_by('-total')
        for item in aggr_res:
            item['rental_station'] = RentalStation.objects.get(id=item['rental_station']).name
        return Response(aggr_res)
    
    
# 3  the Most Rented Vehicle Type Endpoint:

from django.db.models import F

class MostRentedType(APIView):

    permission_classes = [AllowAny]
                   
    def get(self, request, *args, **kwargs):
        #all vehicles id
        aggr_res = Rental.objects.values('vehicle') 
        # add vehicles_types
        aggr_res2 = aggr_res.annotate(vehicle_type = F('vehicle__vehicle_type')) 
        # count vehicles by type and sort desc
        aggr_res3 = aggr_res2.values('vehicle_type').annotate(total=Count('vehicle')).order_by('-total') 
        # add vehicle type name instead of number
        for item in aggr_res3: 
            item['vehicle_type'] = VehicleType.objects.get(id=item['vehicle_type']).name
        return Response(aggr_res3)
