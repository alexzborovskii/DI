# # Exercise 1 : Basic Classes
class Employee():
    def __init__(self, firstname, lastname, age, job, salary, address) -> None:
        self.firstname = firstname
        self.lastname = lastname
        self.age = age
        self.job = job
        self.salary = salary
        self.__address = address
        
    def __gt__(self, other_employee):
        return self if self.salary > other_employee.salary else other_employee
    
    def __add__(self, other_employee):
        return self.salary + other_employee.salary
    
    def __str__(self):
        return f'{self.firstname} {self.lastname}, {self.age}, {self.job}, {self.salary}, {self._adress}'

    def get_fullname(self) -> str:
        return self.firstname + self.lastname

    def happy_birthday(self) -> int:
        self.age += 1
        return self.age

    def get_promotion(self, promotion_amount):
        self.salary += promotion_amount

    def show_info(self):
        print(self)
        
       ##################
       ####Exercise 1####
       ##################
        
    @property
    def address(self):
        return self.__address
    
    @address.setter
    def address(self, new_addres):
        if self.age > 30:
            self.__address = new_addres
        else:
            raise Exception('Too young')
    
    @classmethod    
    def create_best_employee(cls, firstname, lastname, age, job, salary, address):
        if salary > 30000:
            return cls(firstname, lastname, age, job, salary, address)
        
    
       ##################
       ####Exercise 2####
       ##################
       
class Manager(Employee):
    def __init__(self, firstname, lastname, age,  address, job = "manager", salary = 45000) -> None:
        super().__init__(firstname, lastname, age, job, salary, address)
        __employees = []
    
    # @employees.setter    
    # def add_new_employee(self, new_employee):
    #     self.employees.append(new_employee)
        
    # show_employees(self) 
        

brad = Manager('Brad', 'Pitt', 50, 'Tel Aviv')
       

# emp1 = Employee('Lea', 'Smith', 30, 'developer', 10000, 'TA')
# emp2 = Employee('David', 'Schartz', 20, 'teacher', 20000, 'Haifa')

# emp1.get_fullname()
# emp1.happy_birthday()
# emp1.get_promotion(5000)
# emp1.show_info()
# emp2.get_fullname()
# emp2.happy_birthday()
# emp2.get_promotion(5000)
# print(emp1 > emp2)
# print(emp1 + emp2)
# emp2.show_info()


# # Exercise 2 : Inheritance

# class Developer(Employee):
#     def __init__(self, firstname, lastname, age, job='Developer', salary=15000) -> None:
#         super().__init__(firstname, lastname, age, job, salary)
#         self.coding_skills = []

#     def add_skills(self, *skills):
#         for skill in skills:
#             if skill not in self.coding_skills:
#                 self.coding_skills.append(skill)

#     def coding(self):
#         coding_string = f'{self.get_fullname()} can code in '
#         coding_string += ", ".join(self.coding_skills)
#         print(coding_string)

#     def coding_with_partner(self, other_developer):
#         coding_with_string = f'{self.get_fullname()} and {other_developer.get_fullname()} code in '
#         together_skills = self.coding_skills[:]
#         for skill in other_developer.coding_skills:
#             if skill not in together_skills:
#                 together_skills.append(skill)
#         print(f'{coding_with_string} {together_skills}')

#     def get_promotion(self, promotion_amount):
#         self.salary *= promotion_amount


# dev1 = Developer('Tom', 'Cruiz', 30)
# dev2 = Developer('Angelina', 'Jolie', 23)
# dev1.show_info()
# dev2.show_info()
# dev1.get_fullname()
# dev1.happy_birthday()
# dev1.get_promotion(5)
# dev1.show_info()
# dev1.add_skills('Java', 'HTML')
# dev2.add_skills('Java', 'Python', 'CSS')
# dev2.coding()

# dev1.coding_with_partner(dev2)
