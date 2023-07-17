# all_colors = ["red", "blue", "yellow"]
# user_index = input("give me the index ")
# user_list = user_index.split("-")
# all_colors.insert(int(user_list[0]), user_list[1])
# print(all_colors)

numbers = range(1, 16)
for number in numbers:
    number_type = "odd" if number % 2 else "even"
    result = f'{number} is {number_type}'
    print(result)