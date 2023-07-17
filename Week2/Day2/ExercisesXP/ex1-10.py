# Exercise 1

# my_fav_numbers = set()
# my_fav_numbers.add(7)
# my_fav_numbers.add(13)
# my_fav_numbers.discard(13)
# print(my_fav_numbers)

# friend_fav_number = {"8", "5", "13"}
# print(friend_fav_number)

# our_fav_numbers = my_fav_numbers.union(friend_fav_number)
# print(our_fav_numbers)

# Exercise 2
# no, tuple is immutable

# Exercise 3
# basket = ["Banana", "Apples", "Oranges", "Blueberries"]
# basket.remove("Banana")
# print(basket)
# basket.pop()
# print(basket)
# basket.append("Kiwi")
# print(basket)
# basket.insert(0, "Apples")
# print(basket)
# print(basket.count("Apples"))
# basket.clear()
# print(basket)


# Exercise 4 REDO
# 1. *.*
# 2. yes
# 3
# import numpy as np
# num_list = (list(np.arange(1.5, 5.5, 0.5)))
# res_list = []
# for num in num_list:
#     if num % 1 == 0:
#         res_list.append(int(num))
#     else:
#         res_list.append(num)
# print(res_list)
        


# Exercise 5
# 1
# for number in range(1, 21):
#     print(number)
# 2
# for index, number in enumerate(range(1, 21)):
#     if not index % 2 : print(number)
    
# Exercise 6
# my_name = "Alex"
# while True :
#     input_name = input("Input the name or \"exit\" to quit ")
#     if input_name == my_name:
#         print("names are equal")
#         break
#     elif (input_name == "exit"):
#         print("exiting")
#         break
#     else: 
#         print("names are different")

# Exercise 7
# fav_fruit = input("give me your favarite fruit(s), seraartiong by ' ': ")
# fruits_list = fav_fruit.split()
# second_fruit = input("give me the fruit to check in favorites: ")
# if second_fruit in fruits_list:
#     print("You chose one of your favorite fruits! Enjoy!")
# else:
#     print("You chose a new fruit. I hope you enjoy!")

# Exercise 8
# toppings = []
# while True:
#     topping = input("Give me the topping ('quit' to stop) ")
#     if topping == "quit":
#         break
#     else:
#         toppings.append(topping)
    
# # Exercise 9
# # 1-2-3
# ages = input("type in the ages with ' ' separator ").split()
# price = 0
# for person in ages:
#     if int(person) < 3:
#         continue
#     elif int(person) <= 12:
#         price += 10
#     else:
#         price += 15
# print(f"Total cost for all the family is {price} $")

# # 4
# teen_names = ["Anna", "Gal", "Alex", "Ziv"]
# restric_list = []
# for name in teen_names:
#     teen_age = int(input(f"Say you age, {name}: "))
#     if 16 < teen_age < 21:
#         restric_list.append(name)
# for unlucky in restric_list:
#     teen_names.remove(unlucky)
# print(teen_names)
    
# Exercise 10
# sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", 
#                    "Avocado sandwich", "Pastrami sandwich", 
#                    "Egg sandwich", "Chicken sandwich", 
#                    "Pastrami sandwich"]

# for sandwich in sandwich_orders:
#     if "Pastrami" in sandwich:
#         sandwich_orders.remove(sandwich)
# finished_sandwich = []
# for rem_sandwich in sandwich_orders:
#     finished_sandwich.append(rem_sandwich)
# for each_sandwich in finished_sandwich:
#     sandwich_orders.remove(each_sandwich) 
#     print(f"I made your {each_sandwich} ")  
