# Exercise 3


class MenuManager:
    def __init__(self) -> None:
        self.menu = []

    def add_item(self, name: str, price: int, spice: str, gluten: bool) -> None:
        self.menu.append({'name': name, 'price': price,
                         'spice': spice, 'gluten': gluten})

    def update_item(self, name: str, price: int, spice: str, gluten: bool) -> None:
        is_in_menu = 0
        for dish in range(len(self.menu)):
            if name == self.menu[dish]['name']:
                self.menu[dish]['price'] = price
                self.menu[dish]['spice'] = spice
                self.menu[dish]['gluten'] = gluten
                is_in_menu += 1
        if is_in_menu == 0:
            print(f'Can`t update {name}, the dish {name} is not in the menu')

    def remove_item(self, name: str) -> None:
        is_in_menu = 0
        for dish in range(len(self.menu)):
            if name == self.menu[dish]['name']:
                self.menu.pop(dish)
                is_in_menu += 1
                break
        self.print_menu()
        if is_in_menu == 0:
            print(f'Can`t delete {name}, the dish {name} is not in the menu')

    def print_menu(self) -> None:
        for dish in range(len(self.menu)):
            print(
                f'{self.menu[dish]["name"]} - {self.menu[dish]["price"]} - {self.menu[dish]["spice"]} - {self.menu[dish]["gluten"]}')
        spice_meaning = """Meaning: For the spice level:
       • A = not spicy,
       • B = a little spicy,
       • C = very spicy\n"""
        print(f"\n {spice_meaning}")


mc_donalds = MenuManager()
mc_donalds.add_item("Soup", 10, 'B', False)
mc_donalds.add_item("Hamburger", 15, "A", True)
mc_donalds.add_item("Salad", 18, "A", False)
mc_donalds.add_item("French Fries", 5, "C", False)
mc_donalds.add_item("Beef bourguignon", 25, "B", True)
mc_donalds.print_menu()
mc_donalds.update_item("Salad", 28, "B", True)
mc_donalds.update_item("French", 10, "C", False)
mc_donalds.remove_item("Soup")
mc_donalds.remove_item("Ham")

