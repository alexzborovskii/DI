from django.contrib import admin
from django.urls import include, path
from rent.views import RentalList, RentalDetail, CustomerList, CustomerAdd, VehicleList, VehicleDetail, VehicleAdd, RentalStationList, RentalStationAdd, RentalStationDetail, VehicleDistribution, RentalStat, PopularRentalStation, MostRentedType
 
urlpatterns = [
path('rental/', RentalList.as_view(), name='rental_list'),
path('rental/<int:pk>', RentalDetail.as_view(), name='rental_detail'),
path('customer/', CustomerList.as_view(), name='customer_list'),
path('customer/add', CustomerAdd.as_view(), name='customer_add'),
path('vehicle/', VehicleList.as_view(), name='vehicle_list'),
path('vehicle/<int:pk>', VehicleDetail.as_view(), name='vehicle_detail'),
path('vehicle/add', VehicleAdd.as_view(), name='vehicle_add'),
path('station/', RentalStationList.as_view(), name='station_list'),
path('station/add', RentalStationAdd.as_view(), name='station_add'),
path('station/<int:pk>', RentalStationDetail.as_view(), name='station_detail'),
path('station/distribution', VehicleDistribution.as_view(), name='station_distribution'),

path('stats/monthly', RentalStat.as_view(), name='rental_month_stat'),
path('stats/popular_station', PopularRentalStation.as_view(), name='popular_station'),
path('stats/popular_vehicle_type', MostRentedType.as_view(), name='most_rented_type'),
]
