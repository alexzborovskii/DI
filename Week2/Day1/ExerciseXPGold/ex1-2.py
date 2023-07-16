# Exercise 1
print("Hello world \n" * 4 + "I love python \n" * 4)

# Exercise 2
month_id = int(input("Type in the number of the month (1 -12) "))
id_mod = month_id % 12
if id_mod <= 2:
    print("Winter")
elif id_mod <= 5:
    print("Spring")
elif id_mod <= 8:
    print("Summer")
else:
    print("Autumn")