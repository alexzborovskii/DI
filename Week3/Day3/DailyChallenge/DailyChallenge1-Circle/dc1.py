class Circle():
    pi = 3.14159265
    
    def __init__(self, radius) -> None:
        self.radius = radius
    
    def __str__(self) -> None:
        return str(self.__dict__)
    
    def __add__(self, other_circle: 'Circle'):
        return self.radius + other_circle.radius
    
    def __gt__(self, other_circle: 'Circle'):
        return  self.radius > other_circle.radius
     
    def __lt__(self, other_circle: 'Circle'):
        return  self.radius < other_circle.radius 
    
    def __eq__(self, other_circle: 'Circle'):
        return  self.radius == other_circle.radius 
            
    @classmethod
    def add_circle_by_radius(cls, radius):
        return cls(radius)
    
    @classmethod
    def add_circle_by_diameter(cls, diameter):
        radius = diameter / 2
        return cls(radius)
    
    def circle_area(self):
        self.area = Circle.pi * self.radius ** 2
        return self.area

if __name__ == '__main__':
    cir1 = Circle.add_circle_by_radius(5)
    cir2 = Circle.add_circle_by_diameter(20)
    cir3 = Circle.add_circle_by_radius(20)
    cir4 = Circle.add_circle_by_radius(3)
    
    print(cir1)
    print(cir2)
    cir1.circle_area()
    print(cir1)
    print(cir1 + cir2)
    print(cir1 < cir2)
    print(cir1 > cir2)
    print(cir1 == cir2)
    
    cir_list = [cir1, cir2, cir3, cir4]
    cir_list_sorted = sorted(cir_list)
    for item in cir_list_sorted:
        print(item)
    