import random
from textwrap import dedent


class Game():
    items = ['r', 'p', 's']

    def __init__(self) -> None:
        self.result = {
            'draw': 0,
            'won': 0,
            'loss': 0
        }

    @staticmethod
    def get_user_item():

        while True:
            try:
                usr_item = input(
                    'Choose the item: (r)ock, (p)aper or (s)cissors: ')
                if usr_item not in Game.items:
                    raise ValueError(
                        'Incorrect input. Please type just one letter of the item. \n')
            except ValueError as err:
                print(err)
            else:
                return usr_item

    @staticmethod
    def get_computer_item():
        comp_item = random.choice(Game.items)
        return comp_item

    def get_game_result(self, user_item, computer_item):
        if user_item == computer_item:
            return "draw"
        elif user_item == "r":
            if computer_item == "s":
                return 'won'
            else:
                return 'loss'
        elif user_item == "p":
            if computer_item == "r":
                return 'won'
            else:
                return 'loss'
        elif user_item == "s":
            if computer_item == "p":
                return 'won'
            else:
                return 'loss'

    def play(self):
        usr = self.get_user_item()
        comp = self.get_computer_item()
        one_game_result = self.get_game_result(usr, comp)
        print(
            f"You selected '{usr}'. The computer selected '{comp}'. You {one_game_result}")
        return one_game_result
