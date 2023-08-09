from django.shortcuts import render
from django.http import HttpResponse
from .data import animals, families

# Create your views here.



def display_all_animals(request):
    all_animals_list = []
    for animal in animals:
        animal_str = f"""name: {animal['name']},
        legs: {animal['legs']},
        weight: {animal['weight']},
        height: {animal['height']},
        speed: {animal['speed']} 
        """
        all_animals_list.append(animal_str)
        # print(all_animals_list)
    return HttpResponse(all_animals_list)

def display_all_families(request):
    families_list = []
    for family in families:
        families_list.append(family['name'])
        # print(all_animals_list)
    return HttpResponse(families_list)

def display_one_animal(request, animal_id: int):
    for animal in animals:
        if animal['id'] == animal_id:
            animal_str = f"""name: {animal['name']},
            legs: {animal['legs']},
            weight: {animal['weight']},
            height: {animal['height']},
            speed: {animal['speed']} 
            """
            break
    else:
        animal_str = "not found"
    return HttpResponse(animal_str)


def display_animal_per_family(request, family_id:int) -> list[str]:
    animals_family = []
    for animal in animals:
        if animal['family'] == family_id:
            animal_str = f"""name: {animal['name']},
            legs: {animal['legs']},
            weight: {animal['weight']},
            height: {animal['height']},
            speed: {animal['speed']} 
            """
            animals_family.append(animal)
    return HttpResponse(animals_family)
