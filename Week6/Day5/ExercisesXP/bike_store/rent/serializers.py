from rest_framework import serializers
from .models import Customer, Vehicle, VehicleType, VehicleSize, Rental, RentalRate, RentalStation, Address, VehicleAtRentalStation

class CustomerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Customer
        fields = ('first_name', 'last_name', 'email', 'phone_number', 'address')
        

class VehicleSerializer(serializers.ModelSerializer):

    class Meta:
        model = Vehicle
        fields = ('vehicle_type', 'date_created', 'real_cost', 'size')
        

class VehicleTypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = VehicleType
        fields = ('name')
        

class VehicleSizeSerializer(serializers.ModelSerializer):

    class Meta:
        model = VehicleSize
        fields = ('name')
        

class RentalSerializer(serializers.ModelSerializer):

    class Meta:
        model = Rental
        fields = ('rental_date', 'return_date', 'customer', 'vehicle')
        

class RentalRateSerializer(serializers.ModelSerializer):

    class Meta:
        model = RentalRate
        fields = ('daily_rate', 'vehicle_type', 'vehicle_size')
        

class RentalStationSerializer(serializers.ModelSerializer):

    class Meta:
        model = RentalStation
        fields = ('name', 'capacity', 'address')
        

class AddressSerializer(serializers.ModelSerializer):

    class Meta:
        model = Address
        fields = ('address', 'address2', 'city', 'country', 'postal_code')
        

class VehicleAtRentalStationSerializer(serializers.ModelSerializer):

    class Meta:
        model = VehicleAtRentalStation
        fields = ('arrival_date', 'departure_date', 'vehicle')
        

