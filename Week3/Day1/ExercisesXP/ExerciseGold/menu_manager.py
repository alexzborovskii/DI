# Exercise 3


class MenuManager:
    def __init__(self) -> None:
        self.menu = []

    def add_item(self, name: str, price: int, spice: str, gluten: bool):
        self.menu.append({'name': name, 'price': price,
                         'spice': spice, 'gluten': gluten})

    def update_item(self, name: str, price: int, spice: str, gluten: bool):
        is_in_menu = 0
        for dish in range(len(self.menu)):
            if name == self.menu[dish][name]:
                self.menu[dish][price] = price
                self.menu[dish][spice] = spice
                self.menu[dish][gluten] = gluten
                is_in_menu += 1
        if is_in_menu == 0:
            print(f'Can`t update {name}, the dish {name} is not in the menu')

    def remove_item(self, name):
        is_in_menu = 0
        for dish in range(len(self.menu)):
            if name == self.menu[dish][name]:
                self.menu.pop(dish)
                is_in_menu += 1
        if is_in_menu == 0:
            print(f'Can`t delete {name}, the dish {name} is not in the menu')

    def print_menu(self):
        for dish in range(len(self.menu)):
            print(
                f'{self.menu[dish]["name"]} - {self.menu[dish]["price"]} - {self.menu[dish]["spice"]} - {self.menu[dish]["gluten"]}')
        spice_meaning = """Meaning: For the spice level:
       • A = not spicy,
       • B = a little spicy,
       • C = very spicy"""
        print(f"\n {spice_meaning}")


mc_donalds = MenuManager()
mc_donalds.add_item("Soup", 10, 'B', False)
mc_donalds.add_item("Hamburger", 15, "A", True)
mc_donalds.add_item("Salad", 18, "A", False)
mc_donalds.add_item("French Fries", 5, "C", False)
mc_donalds.add_item("Beef bourguignon", 25, "B", True)
mc_donalds.print_menu()
