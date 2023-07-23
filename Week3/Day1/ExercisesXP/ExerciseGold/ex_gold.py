# # Exercise 1
# class Circle:
#     circle_info = "Circle is a round plane figure whose boundary (the circumference) consists of points equidistant from a fixed point (the center)."
#     pi = 3.14159265
#     def __init__(self, radius=1.0) -> None:
#         self.radius = radius
        
#     def get_perimeter(self) -> float:
#         return 2 * Circle.pi * self.radius
    
#     def get_area(self) -> float:
#         return Circle.pi * self.radius ** 2
    
#     def info(self):
#         print(self.circle_info)
        
# circle1 = Circle(3)
# print(circle1.get_perimeter())
# print(circle1.get_area())
# circle1.info()



# # Exercise 2
# import random

# class MyList:
    
#     def __init__(self, chr_list: list[str]) -> None:
#         self.chr_list = chr_list
        
#     def reverse_mylist(self) -> list:
#         return self.chr_list[::-1]
    
#     def sort_mylist(self) -> list:
#         return sorted(self.chr_list)
    
#     def gen_numbers(self) -> list:
#         return [random.randint(0, 1000) for i in self.chr_list]
    
# my_list = MyList(['q', 'w', 'e', 'r', 't', 'y', 'a', 's', 'd', 'f', 'g'])
# print(my_list.reverse_mylist())
# print(my_list.sort_mylist())
# print(my_list.gen_numbers())