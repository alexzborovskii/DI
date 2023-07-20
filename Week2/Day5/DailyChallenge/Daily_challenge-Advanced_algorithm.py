import random

list_of_numbers = [random.randint(0, 10000) for _ in range(20000)]
target_number   = 3728
list_of_numbers.sort()
border = list_of_numbers.index(target_number + 1)
couples_counter = 0
# print(list_of_numbers)
for i in range(border):
    for j in range(i + 1, len(list_of_numbers)):
        if list_of_numbers[j] + list_of_numbers[i] == target_number:
            couples_counter += 1
            # print(list_of_numbers[j], list_of_numbers[i])
print(couples_counter)


