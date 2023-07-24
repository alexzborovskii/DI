# Exercise 1 : Family
class Family():
    def __init__(self, last_name: str) -> None:
        self.last_name = last_name

    members = [
        {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
        {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
    ]

    def born(self, **kwargs) -> None:
        self.members.append(dict(kwargs))
        for k, v in kwargs.items():
            if k == 'name':
                print(f"Congrats! {k} was born!")

    def is_18(self, name):
        for item in self.members:
            if item.get('name') == name:
                return item.get('age') >= 18

    def family_presentation(self):
        names_list = []
        for item in self.members:
            names_list.append(item.get('name'))
        names = ', '.join(names_list)
        print(f'{self.last_name}`s: {names}')

# if __name__ == '__main__':
#     garcia = Family('Garcia')
#     garcia.family_presentation()
#     garcia.born(name='Silvia', age=0, gender = 'Female', is_child = True)
#     garcia.family_presentation()
#     print(garcia.is_18('Silvia'))
#     print(garcia.is_18('Michael'))


# Exercise 2 : TheIncredibles Family
class THeIncredibles(Family):
    members = [
        {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False,
            'power': 'fly', 'incredible_name': 'MikeFly'},
        {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False,
            'power': 'read minds', 'incredible_name': 'SuperWoman'}
    ]

    def use_power(self, name):
        for item in self.members:
            if item.get('name') == name:
                if self.is_18():
                    print(f'{name} uses {item.get("power")}')
                else:
                    raise Exception(f'{name} is not over 18 years old')
                
    def incredible_presentation(self):
        super().family_presentation()
        
        power_list = []
        for item in self.members:
            power_list.append((item.get('name'), item.get('power')))
            
        for k, v in power_list:
            print(f'{k}: {v}')
    
# if __name__ == '__main__':
#     incredibles = THeIncredibles('LosDoritos')
#     incredibles.incredible_presentation()
#     incredibles.born(name='Jack', age=0, gender = 'Male', is_child = True, power = 'Unknown Power', incredible_name ='Baby Jack' )
#     incredibles.incredible_presentation()