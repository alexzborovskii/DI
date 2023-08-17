#                 # # # Python Basics

#         # # Data Types
# # 1. c

#         # # Lists and Loops
# # 1.

# sqr_list = [i ** 2 for i in range(1, 11) if i % 2 == 0]
# print(sqr_list)

# # 2.

# list_of_numbers = list(range(1, 11))
# for number in list_of_numbers:
#     if (number % 2 == 0) and (number % 3 == 0):
#         print(number)

# # 3.
# student_list = [
#     {
#     "name": "John",
#     "age": 24
#     },
#     {
#     "name": "Anna",
#     "age": 22
#     },
#     {
#     "name": "Mike",
#     "age": 25
#     }
# ]

# for dict in student_list:
#     print(dict["name"], dict["age"])


#         # # Function Behavior with *args and **kwargs
# # 1.
# def combine_words(*args, **kwargs):
#     output_str = ""
#     for arg in args:
#         output_str += arg + " "
#     for value in kwargs.values():
#         output_str += value + " "
#     return output_str

# print(combine_words("Hello", "world", second="is", third="great!", first="Python"))


#            # # Object-Oriented Programming (OOP)

# # # 1
# class Vehicle():
#     type = ""
#     brand = ""
#     year = 0

#     def __init__(self, type: str, brand: str, year: int):
#         self.type = type
#         self.brand = brand
#         self.year = year

#     def __str__(self):
#         return f"type: {self.type}, brand: {self.brand}, year: {self.year}"


# veh = Vehicle("sport", "BWW", 1984)
# print(veh)

#             # # OOP Inheritance and Decorators
# # 1.
# class Car():
#     brand = ""
#     model = ""
#     mileage = 0

#     def __init__(self, brand: str, model: str, mileage: int):
#         self.brand = brand
#         self.model = model
#         self.mileage = mileage

#     def __str__(self):
#         return f"brand: {self.brand}, model: {self.model}, mileage: {self.mileage}"


# # 2.
# class ElectricCar(Car):
#     __battery_capacity = 0.0
    
#     def __init__(self, brand: str, model: str, mileage: int):
#         super().__init__(brand, model, mileage)

#     def __str__(self):
#         return f"brand: {self.brand}, model: {self.model}, mileage: {self.mileage}, battery_capacity: {self.__battery_capacity} "

#     @property
#     def battery_capacity(self):
#          return self.__battery_capacity
       
#     @battery_capacity.setter
#     def battery_capacity(self, new_capacity: int):
#          if(new_capacity < 0):
#             raise ValueError("Capacity should be positive")
#          self.__battery_capacity = new_capacity
         
# el_car = ElectricCar("Audi", "A8", 10000)
# # el_car.battery_capacity = -4
# el_car.battery_capacity = 5
# print(el_car.battery_capacity)

# # 3.
# class BankAccount():
#     _balance = 0.0
#     _account_holder = ""
#     accounts_created = 0
    
#     def __init__(self, balance: float, account_holder: str):
#         self._balance = balance
#         self._account_holder = account_holder
#         BankAccount.acc_created()

    
#     @staticmethod
#     def bank_pol_msg():
#         msg = "This is a bank policy message"
#         return msg
    
#     @classmethod
#     def acc_created():
#         accounts_created += 1
        
    
#     @property
#     def balance(self):
#          return self._balance
       
#     @balance.setter
#     def balance(self, new_balance: int):
#          if(new_balance < 0):
#             raise ValueError("Balance should be positive")
#          self._balance = new_balance
         
         
#     def deposit(self, value):
#         if(value >= 0):
#             raise ValueError("Value should be positive")
#         else:
#             self.balance += value
        
#     def withdraw(self, value):
#         if(value > self.balance):
#             raise ValueError("Not enough money")
#         else:
#             self.balance -= value
    
#     def view_balance(self):
#         return self._balance
    

#             # # Data Science
# # 1
# import numpy as np


# np_arr = np.arange(1, 10).reshape(3, 3)
# print(np_arr)

# # 2
# import pandas as pd
# df = pd.DataFrame({'A': [1, 'apple', 3, 4, 'banana'], 'B': [5, 6, 7, 8, 9]})
# print(df["A"].pd.to_numeric())
