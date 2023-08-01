# def sum_list(my_list):
#     if len(my_list) == 1:
#         return my_list[0]
#     else :
#         return my_list[0] + sum_list(my_list[1:])
        
# list = [2, 4, 5, 6, 7]

# print(sum_list(list))







# def reverse_string(some_string):
    
#     if len(some_string) == 0:
#         return some_string
#     else:
#         return some_string[-1] + reverse_string(some_string[:-1])
       
    
# def reverse_string(some_string):
#     if len(some_string) == 0:
#         return some_string
#     else:
#         return reverse_string(some_string[1:]) + some_string[0]

# print(reverse_string('Hello, world!'))   
    
    
    
    
    
# def power_of_number(base, exp):
#     if exp == 0:
#         return 1
#     else:
#         return base * power_of_number(base, exp-1)
    
# print(power_of_number(2, 3))