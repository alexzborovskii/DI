from random import choice
from dogs import Dog


class PetDog(Dog):
    def __init__(self, name: str, age: int, weight: int, trained: bool = False) -> None:
        super().__init__(name, age, weight)
        self.trained = trained

    def train(self):
        print(self.bark())
        self.trained = True

    def play(self, *dogs):
        dog_names = f'{self.name}, '
        for dog in dogs:
            dog_names += dog.name
        print(f'{dog_names} all play together')

    def do_a_trick(self):
        tricks = [f'{self.name} does a barrel roll',
                  f'{self.name} stands on his back legs',
                  f'{self.name} shakes your hand',
                  f'{self.name} plays dead']
        if self.trained:
            print(choice(tricks))
        else:
            print(f'{self.name} is not trained')


if __name__ == '__main__':
    petd1 = PetDog('Petd1', 1, 10)
    petd2 = PetDog('Petd2', 1, 10, True)
    petd3 = PetDog('Petd2', 2, 20,)

    petd1.train()
    petd1.play(petd2)

    petd1.do_a_trick()
    petd2.do_a_trick()
    petd3.do_a_trick()
