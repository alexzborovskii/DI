# Exercise 1
print("Exercise 1".upper())
print("Hello world\n" * 4)



# Exercise 2
print("Exercise 2".upper())
print((99 ** 3) * 8)



# Exercise 3
print("Exercise 3".upper() + "(empty)")
# Task:
# >>> 5 < 3
# >>> 3 == 3
# >>> 3 == "3"
# >>> "3" > 3
# >>> "Hello" == "hello"

# 5 < 3 #False
# 3 == 3 #True
# 3 == "3" #False
# "3" > 3 #TypeError
# "Hello" == "hello" #False



# Exercise 4
print("Exercise 4".upper())
computer_band = "HP"
print(f"I have a {computer_band} computer")



# Exercise 5
print("Exercise 5".upper())
name = "Alex"
age = 29
shoe_size = 45
info = f"my name is {name}, I`m {age} y.o., I`m from Saint-Petersburg. My shoe size is {shoe_size}, btw"
print(info)

#Exercise 6
print("Exercise 6".upper())
a, b = 12, 20
hello = "Hello World"
if a > b: 
    print(hello)

#Exercise 7
print("Exercise 7".upper())
number = int(input("Enter the int number: "))
number_type = "odd" if number % 2 else "even"
print(number_type)

# Exercise 8
print("Exercise 8".upper())
my_name = "Alex"
user_name = input("Whats your name? ").capitalize()
if my_name == user_name:
    print("Looks like our parent think pritty similar. We have the same name")
else:
    print("You have not the same as me. I`m sorry")

#Exercise 9
print("Exercise 9".upper())
inch_height = float(input("Whats Your height in inches? "))
cm_height = inch_height * 2.54
if cm_height> 145:
    print("You are tall enough to ride")
else:
    print("You need to grow some more to ride")
    