# # Exercise 4
# my_text = """Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
#            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
#            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
#            laboris nisi ut aliquip ex ea commodo consequat. 
#            Duis aute irure dolor in reprehenderit in voluptate velit 
#            esse cillum dolore eu fugiat nulla pariatur. 
#            Excepteur sint occaecat cupidatat non proident, 
#            sunt in culpa qui officia deserunt mollit anim id est laborum."""
# count = 0
# for c in my_text:
#     count += 1
# print(f"{count} letter in my_text")


# Exercise 5
counter = 0

while True :
    inp_string = input('type the longer string without "A". Type "exit" to quit. \n')
    if inp_string == "exit": 
        break
    if len(inp_string) > counter:
        print(f"Congrats! New longest string is {inp_string}")
        counter = len(inp_string)
