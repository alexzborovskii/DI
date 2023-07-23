class Farm:
    eieio = "    E-I-E-I-0!"

    def __init__(self, name):
        self.name = name
        self.animals = {}

    def add_animal(self, animal, amount=1):
        if animal in self.animals:
            self.animals[animal] += amount
        else:
            self.animals[animal] = amount

    def get_info(self) -> str:
        animals_strings = ''
        for animal in self.animals:
            animals_strings += f'{animal} : {self.animals[animal]}\n'
        info = f'{self.name}`s farm \n\n{animals_strings}\n{Farm.eieio}'
        return info

    def get_animal_types(self) -> list:
        animal_types = sorted(self.animals.keys())
        return animal_types
        
    def get_short_info(self):
        
        animal_types_string = f'{self.name}`s farm has '
        animals_types = self.get_animal_types()
        # adding 's's and 'and' to the enumeration of types
        for i in range(len(animals_types)):
            if i == len(animals_types) - 1:
                animal_types_string += f' and {animals_types[i]}s.'
                if animal_types_string[i] == "sheep":
                    animal_types_string += f' and {animals_types[i]}.'
                break
            
            if animal_types_string[i] == "sheep":
                animal_types_string += f'{animals_types[i]}'
            else :
                animal_types_string += f'{animals_types[i]}s'
                
            if i != (len(animals_types) - 2):
                animal_types_string += ", "
        # adding types to the first part of the short_info string 
        short_info = f"{self.name}’s farm has {animal_types_string}."
        return animal_types_string
    
    
macdonald = Farm("McDonald")
macdonald.add_animal('cow', 5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())
print(macdonald.get_animal_types())
print(macdonald.get_short_info())
