import turtle

class Circle():
    pi = 3.14159265

    def __init__(self, radius) -> None:
        self.radius = radius

    def __str__(self) -> None:
        return str(self.__dict__)

    def __add__(self, other_circle: 'Circle'):
        return self.radius + other_circle.radius

    def __gt__(self, other_circle: 'Circle'):
        return self.radius > other_circle.radius

    def __lt__(self, other_circle: 'Circle'):
        return self.radius < other_circle.radius

    def __eq__(self, other_circle: 'Circle'):
        return self.radius == other_circle.radius

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
    cir1 = Circle.add_circle_by_radius(25)
    cir2 = Circle.add_circle_by_diameter(100)
    cir3 = Circle.add_circle_by_radius(100)
    cir4 = Circle.add_circle_by_radius(15)

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
        
    s = turtle.getscreen()
    turtle.bgcolor("blue")
    t = turtle.Turtle()
    t.shape("turtle")
    t.pensize(3)
    speed = 1
    t.pen(pencolor="purple", fillcolor="orange", pensize=10, speed=speed)
    for item in cir_list_sorted:
        t.speed(speed)
        t.begin_fill()
        t.circle(item.radius)
        t.end_fill()
        speed += 2
        
