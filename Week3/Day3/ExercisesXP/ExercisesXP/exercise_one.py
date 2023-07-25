from func import func_add, random_guess, current_date, time_befor_NY, age_in_minutes, add_user
from random import choices
import string
from faker import Faker

class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self) -> str:
        if self.amount == 1:
            string =  f'{self.amount} {self.currency}'
        else:
            string =  f'{self.amount} {self.currency}s'
        return string

    def __int__(self) -> int:
            return self.amount
        
    def __repr__(self) -> str:
        if self.amount == 1:
            string =  f'{self.amount} {self.currency}'
        else:
            string =  f'{self.amount} {self.currency}s'
        return string
    
    def __add__(self, other: 'Currency') -> int:
        if self.currency == other.currency:
            return int(self) + int(other)
        else:
            raise TypeError('Cannot add between Currency type <dollar> and <shekel>')
    
    def __iadd__(self, other):
        self.amount = self.amount + int(other)
        return self
        
    
if __name__ == "__main__":
    pass
    # c1 = Currency('dollar', 5)
    # c2 = Currency('dollar', 10)
    # c3 = Currency('shekel', 1)
    # c4 = Currency('shekel', 10)
    
    # Exercise 2 (def in func.py)
    # func_add(3, 4)
    # Exercise 3 (def in func.py)
    # random_guess(10)
    # Exercise 4
    # r_string = (''.join(choices(string.ascii_letters, k = 5)))
    # print(r_string)
    # Exercise 5 (def in func.py)
    # current_date()
    # Exercise 6 (def in func.py)
    # print(time_befor_NY())
    # Exercise 7 (def in func.py)
    # age_in_minutes(1994, 6, 16)
    # Exercise 8 (def in func.py)
    users = []
    add_user(users)
    add_user(users)
    add_user(users)
    print(users)