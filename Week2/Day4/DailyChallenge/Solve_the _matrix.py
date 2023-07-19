from functools import reduce


input_data = """    7ii
    Tsx
    h%?
    i #
    sM 
    $a 
    #t%
    ^r!"""
    # split into lines
input_list = list(input_data.split("\n"))
    # delete spaces
for i in range(len(input_list)):
    input_list[i] = list(input_list[i].lstrip())
    #  get string from transposed matrix
result_string_mixed = ""
for i in range(len(input_list[i])) :
    for j in range(len(input_list)) :
        result_string_mixed += input_list[j][i]
    # replace characters with spaces
result_string = ""
for i in range(len(result_string_mixed)):
    if result_string_mixed[i].isalpha() :
        result_string += result_string_mixed[i]
    else:
        result_string += " "
    # unite into list and back to string to get spaces
result = list(result_string.split())
res = reduce(lambda x, y: x + ' ' + y, result)
print(res)