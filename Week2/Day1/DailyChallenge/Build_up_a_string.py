# 1
input_string = input("Type in the string: ")
string_length = len(input_string)
if string_length < 10:
    print("string not long enough")
elif string_length> 10:
    print("string too long")
else:
    print("perfect string")
    
# 2
print(input_string[0], input_string[-1])

# 3
output = ""
for c in input_string:
    output += c
    print(output)
    

# 4
import random

input_list = list(input_string)
random.shuffle(input_list)
shuffled_output = "".join((input_list))
print(shuffled_output)