# # Exercise Door
# class Door():
#     def __init__(self) -> None:
#         self.is_open = None

#     def open_door(self) -> bool:
#         self.is_open = True
#         return self.is_open

#     def close_door(self) -> bool:
#         self.is_open = False
#         return self.is_open

# class BlockedDoor(Door):
#     def open_door(self) -> bool:
#         print("Error. A blocked door cannot be opened or closed")
#         return self.is_open

#     def close_door(self) -> bool:
#         print("Error. A blocked door cannot be opened or closed")
#         return self.is_open

# b_door = BlockedDoor()
# print(b_door.open_door())
# print(b_door.close_door())
# o_door = Door()
# print(o_door.open_door())
# print(o_door.close_door())


# # Exercise 1 : Basic Classes
class Employee():
    def __init__(self, firstname, lastname, age, job, salary) -> None:
        self.firstname = firstname
        self.lastname = lastname
        self.age = age
        self.job = job
        self.salary = salary

    def get_fullname(self) -> str:
        return self.firstname + self.lastname

    def happy_birthday(self) -> int:
        self.age += 1
        return self.age

    def get_promotion(self, promotion_amount):
        self.salary += promotion_amount

    def show_info(self):
        print(
            f'{self.firstname} {self.lastname}, {self.age}, {self.job}, {self.salary}')

# emp1 = Employee('Lea', 'Smith', 30, 'developer', 10000)
# emp2 = Employee('David', 'Schartz', 20, 'teacher', 20000)

# emp1.get_fullname()
# emp1.happy_birthday()
# emp1.get_promotion(5000)
# emp1.show_info()
# emp2.get_fullname()
# emp2.happy_birthday()
# emp2.get_promotion(5000)
# emp2.show_info()


# Exercise 2 : Inheritance

class Developer(Employee):
    def __init__(self, firstname, lastname, age, job='Developer', salary=15000) -> None:
        super().__init__(firstname, lastname, age, job, salary)
        self.coding_skills = []

    def add_skills(self, *skills):
        for skill in skills:
            if skill not in self.coding_skills:
                self.coding_skills.append(skill)

    def coding(self):
        coding_string = f'{self.get_fullname()} can code in '
        coding_string += ", ".join(self.coding_skills)
        print(coding_string)

    def coding_with_partner(self, other_developer):
        coding_with_string = f'{self.get_fullname()} and {other_developer.get_fullname()} code in '
        together_skills = self.coding_skills[:]
        for skill in other_developer.coding_skills:
            if skill not in together_skills:
                together_skills.append(skill)
        print(f'{coding_with_string} {together_skills}')

    def get_promotion(self, promotion_amount):
        self.salary *= promotion_amount


dev1 = Developer('Tom', 'Cruiz', 30)
dev2 = Developer('Angelina', 'Jolie', 23)
dev1.show_info()
dev2.show_info()
dev1.get_fullname()
dev1.happy_birthday()
dev1.get_promotion(5)
dev1.show_info()
dev1.add_skills('Java', 'HTML')
dev2.add_skills('Java', 'Python', 'CSS')
dev2.coding()

dev1.coding_with_partner(dev2)
