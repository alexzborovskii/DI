from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

name = 'Bob Smith'
age = 35
country = 'USA'

people = ['bob','martha', 'fabio', 'john']

all_people = [
  {
    'id': 1,
    'name': 'Bob Smith',
    'age': 35,
    'country': 'USA'
  },
  {
    'id': 2,
    'name': 'Martha Smith',
    'age': 60,
    'country': 'USA'
  },
  {
    'id': 3,
    'name': 'Fabio Alberto',
    'age': 18,
    'country': 'Italy'
  },
  {
    'id': 4,
    'name': 'Dietrich Stein',
    'age': 85,
    'country': 'Germany'
  }
]



def display_person(request):
    person = f'Name: {name}, age: {age}, country: {country}'
    return HttpResponse(person)

def display_people(request) -> (str):
    people_list = ''
    people_sorted = sorted(people)
    for person in people_sorted:
        cap_person = person.capitalize() + " "
        people_list += cap_person
    return HttpResponse(people_list)

def display_all_people(request):
    people_all_sorted = sorted(all_people, key=lambda d: d['age'])
    all_people_info= "All people:<br>"
    for men in people_all_sorted:
        men_info = f"{men['id']} {men['name']} {men['age']} {men['country']}<br>"
        all_people_info += men_info
    return HttpResponse(all_people_info)