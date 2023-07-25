from random import randint
import datetime
from faker import Faker


def func_add(num1: int, num2: int) -> None:
    print(num1 + num2)
    
def random_guess():
    user_num = int(input('Type in the number: '))
    rand_num = randint(1, 100)
    if user_num == rand_num:
        print('Wow! Random number is the same!')

def current_date():
    print("Today's date: ", datetime.date.today())
    
def time_befor_NY():
    return (datetime.datetime(datetime.date.today().year + 1, 1, 1) - datetime.datetime.now())

def age_in_minutes(year, month, day):
    birthday = datetime.datetime(year, month, day)
    print(datetime.datetime.now() - birthday)
    
def add_user(usrs_list: list):
    faker = Faker()
    usr_name = faker.name()
    usr_address = faker.address()
    usr_langage_code = faker.words(3)
    usrs_list.append({'name': usr_name , 'adress': usr_address, 'langage_code': usr_langage_code})