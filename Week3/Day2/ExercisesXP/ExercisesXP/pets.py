# Exercise 1: Pets
class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'
    
class Siames(Cat):
    pass

if __name__ == '__main__':
    beny = Bengal('Beny', 1)
    chary = Chartreux('Chary', 2)
    sia = Siames('Sia', 3)

    all_cats = [beny, chary, sia]
    Sarahs_pets = Pets(all_cats)
    Sarahs_pets.walk()