from datetime import datetime
import os
import random
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'bike_store.settings')
import django
django.setup()

from rent.models import Customer, Address, Vehicle, VehicleType, VehicleSize, Rental, VehicleAtRentalStation, RentalStation
from faker import Faker

fake = Faker()

def create_customers(number):
    for _ in range(number):
        
        # ### Address ###
        # address = Address(
        #     address=fake.street_address(),
        #     address2=fake.secondary_address(),
        #     city=fake.city(),
        #     country=fake.country(),
        #     postal_code=fake.zipcode()
        # )
        # address.save()


        # ### Customer ###
        # customer = Customer(
        #     first_name=fake.first_name(),
        #     last_name=fake.last_name(),
        #     email=fake.email(),
        #     phone_number=fake.phone_number(), 
        #     address=address
        # )
        # customer.save()
        
        
        # ### Vehicle ###
        # vehicle = Vehicle(
        #     vehicle_type = VehicleType.objects.get(id = random.randint(1, 3)),
        #     date_created = fake.date_between_dates(date_start=datetime(2015,1,1), date_end=datetime(2019,12,31)),
        #     real_cost = fake.pyfloat(left_digits=8, right_digits=2, positive=True, min_value=1000.00, max_value=50000),
        #     size = VehicleSize.objects.get(id = random.randint(1, 3)),
            
        # )
        # vehicle.save()
        
        
        # ### Rental ###
        # def returned_date(rent_date):
        #     returned = random.randint(0,1)
        #     if returned:
        #         date = fake.date_between_dates(rent_date, date_end=datetime(2023, 8, 19))
        #     else:
        #         date = None
        #     return date
       
        # gen_date = fake.date_between_dates(date_start=datetime(2023,1,1), date_end=datetime(2023, 8, 19))
       
        # rental = Rental(
        # rental_date = gen_date,
        # return_date = returned_date(gen_date),
        # customer = Customer.objects.get(id = random.randint(1, 100)),
        # vehicle = Vehicle.objects.get(id = random.randint(1, 111)),
        # )
        # rental.save()

        
        # ### VehicleAtRentalStation ###
        # def departure_date(rent_date):
        #     returned = random.randint(0,4)
        #     if returned < 4:
        #         date = fake.date_between_dates(rent_date, date_end=datetime(2023, 8, 19))
        #     else:
        #         date = None
        #     return date
       
        # gen_date = fake.date_between_dates(date_start=datetime(2022,6,1), date_end=datetime(2023, 8, 19))
       
        # vehicle_at_rental = VehicleAtRentalStation(
        # arrival_date = gen_date,
        # departure_date = departure_date(gen_date),
        # vehicle = Vehicle.objects.get(id = _ + 1),
        # rental_station = RentalStation.objects.get(id = random.randint(1, 3)),
        # )
        # vehicle_at_rental.save()
        
        
        
        
        pass
    print(f"CREATED {number} objects")

create_customers(109)