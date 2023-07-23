# # Exercise 1

# class Cat:
#     def __init__(self, cat_name, cat_age):
#         self.name = cat_name
#         self.age = cat_age

# kitty1 = Cat('Alice', 1)
# kitty2 = Cat('Bob', 10)
# kitty3 = Cat('Candy', 3)

# def oldest_cat(*args):
#     max_age = 0
#     max_index = 0
#     for i in range(len(args)):
#         if args[i].age > max_age:
#             max_age = args[i].age
#             max_index = i
#     return args[max_index]

# old_cat = oldest_cat(kitty1, kitty2, kitty3)
# print(f"The oldest cat is {old_cat.name}, and is {old_cat.age} years old")


# # Exercise 2
# class Dog:
#     def __init__(self, name, height):
#         self.name = name
#         self.height = height

#     def bark(self):
#         print(f'{self.name} goes woof!')

#     def jump(self):
#         print(f'{self.name} jumps {self.height * 2} cm high!')


# davids_dog = Dog("Rex", 50)
# print(f'Davids dog name is {davids_dog.name}, he is {davids_dog.height} cm height')
# davids_dog.bark()
# davids_dog.jump()

# sarahs_dog = Dog("Teacup", 20)
# print(f'Davids dog name is {sarahs_dog.name}, he is {sarahs_dog.height} cm height')
# sarahs_dog.bark()
# sarahs_dog.jump()

# if sarahs_dog.height > davids_dog.height:
#     print(f'{sarahs_dog.name} is bigger')
# elif sarahs_dog.height < davids_dog.height:
#     print(f'{davids_dog.name} is bigger')
# else:
#     print(f'{davids_dog.name} and {sarahs_dog.name} are the same size')


# # Exercise 3

# class Song:
#     def __init__(self, lyrics):
#         self.lyrics = lyrics

#     def sing_me_a_song(self):
#         for line in self.lyrics:
#             print(line)

# stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])
# stairway.sing_me_a_song()


# # Exercise 4
# class Zoo:

#     def __init__(self, zoo_name) -> None:
#         self.name = zoo_name
#         self.animals = ["Ape", "Baboon", 'Cougar', "Bear", 'Cat', 'Eel', 'Emu']
#         self.sorted_animals_dict = {}

#     def add_animal(self, new_animal):
#         if new_animal not in self.animals:
#             self.animals.append(new_animal)

#     def get_animals(self):
#         for animal in self.animals:
#             print(animal, end=" ")

#     def sell_animal(self, animal_sold):
#         if animal_sold in self.animals:
#             self.animals.remove(animal_sold)
#             return True
#         else:
#             return False

#     def sort_animals(self):
#         sorted_animals = sorted(self.animals)
#         # Creating the dict with first element in group №1
#         group = 1
#         checked_animal = sorted_animals[0]
#         self.sorted_animals_dict[group] = [checked_animal]
#         # looping through the list, comparing first letter and adding element to the suitable group
#         for animal in sorted_animals[1:]:
#             if animal[0] == checked_animal[0]:
#                 self.sorted_animals_dict[group].append(animal)
#             else:
#                 group += 1
#                 checked_animal = animal
#                 self.sorted_animals_dict[group] = [animal]

#         return self.sorted_animals_dict

#     def get_groups(self):
#         for group in self.sorted_animals_dict:
#             print()
#             for item in self.sorted_animals_dict[group]:
#                 print(item, end=" ")


# ramat_gan_safari = Zoo("Ramat Gan")
# ramat_gan_safari.add_animal("Monkey")
# ramat_gan_safari.get_animals()
# ramat_gan_safari.sell_animal("Baboon")
# ramat_gan_safari.sort_animals()
# ramat_gan_safari.get_groups()
