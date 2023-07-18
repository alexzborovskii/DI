# # Exercise 1
# keys = ['Ten', 'Twenty', 'Thirty']
# values = [10, 20, 30]
# dict1 = {k : v for k, v in zip(keys, values)}
# print(dict1)



# Exercise 2
# # 1-2-3-4
# family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
# total_cost = 0
# for member in family.items():
#     if 3 < member[1] < 12:
#         print(f"{member[0]} has to pay 10$")
#         total_cost += 10
#     elif member[1] > 12:
#         print(f"{member[0]} has to pay 15$")
#         total_cost += 15
#     else:
#         print(f"Such kids as {member[0]} don`t pay")
# print(f"Total cost for the family is {total_cost}")
# # 5
# family = {}
# total_cost = 0
# while True:
#     name = input("give me the name: ")
#     if name == "quit":
#         break
#     age = int(input("give me the age: "))
#     family[name] = age
# for member in family.items():
#     if 3 < member[1] < 12:
#         print(f"{member[0]} has to pay 10$")
#         total_cost += 10
#     elif member[1] > 12:
#         print(f"{member[0]} has to pay 15$")
#         total_cost += 15
#     else:
#         print(f"Such kids as {member[0]} don`t pay")
# print(f"Total cost for the family is {total_cost}")



# # Exercise 3
# info = '''name: Zara 
# creation_date: 1975 
# creator_name: Amancio Ortega Gaona 
# type_of_clothes: men, women, children, home 
# international_competitors: Gap, H&M, Benetton 
# number_stores: 7000 
# major_color: 
#     France: blue, 
#     Spain: red, 
#     US: pink, green'''
# brand_strings = info.split("\n")
# brand = {}
# # 1-2 turning info into dict with "string: string"
# for brand_string in brand_strings:
    
#     brand[brand_string.split(":")[0].strip()] =  brand_string.split(":")[1].strip()
# print(brand.items())
# # castiong items to the proper structure
# brand["creation_date"] = int(brand["creation_date"])
# brand["type_of_clothes"] = brand["type_of_clothes"].split(", ")
# brand["international_competitors"] = brand["international_competitors"].split(", ")
# brand["number_stores"] = int(brand["number_stores"])
# brand["major_color"] = dict(brand["major_color"])
# # a little hardcode for the countries
# brand["major_color"].update({"France": brand["France"]})
# brand["major_color"].update({"Spain": brand["Spain"]})
# brand["major_color"].update({"US": brand["US"]})
# brand["major_color"]["US"] = brand["major_color"]["US"].split(", ")
# del brand["France"]
# del brand["Spain"]
# del brand["US"]
          
# print(brand.items())

# # 3
# brand["number_stores"] = 2
# # 4
# print(f"Zara sells pruducts for {brand['type_of_clothes']}")
# # 5
# brand["country_creation"] = "Spain"
# # 6
# if "international_competitors" in brand.keys():
#     brand["international_competitors"].append("Desigual")
#     print(brand)
# # 7
# del brand["creation_date"]
# # 8
# print(brand["international_competitors"][-1])
# # 9
# print(f'the major clothes colors in the US are {brand["major_color"]["US"]}')
# # 10
# print(f"The amount of key value pairs (ie. length of the dictionary) is {len(brand.keys())}")
# # 11
# print(f'The keys of the dictionary are {[k for k in brand.keys()]}')
# # 12
# more_on_zara = {
#     "creation_date": 1975,
#     "number_stores": 10000
# }
# # 13
# brand.update(more_on_zara) 
# # 14
# print(brand["number_stores"]) # number_stores in brand updated to 10000 with step 13



# # Exercise 4
# users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
# # 1
# disney_users_A = dict(zip(users, range(len(users))))
# print(disney_users_A)
                       
# # 2
# disney_users_B = (dict(enumerate(users)))
# print(disney_users_B)

# # 3
# sort_users = users.copy()
# sort_users.sort()
# disney_users_C = dict(zip(sort_users, range(len(sort_users))))
# print(disney_users_C)
# # 4
# disney_users_A41 = {k:v for k, v in disney_users_A.items() if "i" in k}
# disney_users_A42 = {k:v for k, v in disney_users_A.items() if (k[0].lower() == "m" or k[0].lower() == "p")}
# print(disney_users_A41)
# print(disney_users_A42)
