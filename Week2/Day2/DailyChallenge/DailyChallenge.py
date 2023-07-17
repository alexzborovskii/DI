# Challenge 1
number = int(input("Input number: "))
length = int(input("Input length: "))
output = []
for i in range(1, length + 1):
    output.append(i * number)
print(output)


# Challenge 2
users_string = list(input("Type in the string with duplicated letters: "))
result_string = ""
string_length = len(users_string)
for i in range(string_length - 1):
    if i == string_length - 1:
        result_string.append(users_string[i])
    else:
        if users_string[i] != users_string[i - 1]:
            result_string += users_string[i]
print(f"String without duplications: {result_string}")