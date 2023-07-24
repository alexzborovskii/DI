class Dog():
    def __init__(self, name: str, age: int, weight: int) -> None:
        self.name = name
        self.age = age
        self.weight = weight
        
    def bark(self) -> str:
        return f'{self.name} is barking'

    def run_speed(self) -> float:
        return (self.weight/self.age*10)
    
    def power(self):
        return self.run_speed() * self.weight
    
    def fight(self, other_dog):
        if self.power() > other_dog.power():
            return self.name + ' won'
        elif self.power() < other_dog.power():
            return other_dog.name  + ' won'
        else:
            return 'tie'
        
        
if __name__ == '__main__':
    dog1 = Dog('Doggy1', 1, 10)
    dog2 = Dog('Doggy2', 2, 20)
    dog3 = Dog('Doggy3', 1, 10)

    print(dog1.bark())
    print(dog2.bark())
    print(dog3.bark())

    print(dog1.run_speed())
    print(dog2.run_speed())
    print(dog3.run_speed())

    print(dog1.fight(dog2))
    print(dog2.fight(dog3))
    print(dog3.fight(dog1))