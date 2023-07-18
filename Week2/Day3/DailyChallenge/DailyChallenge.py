# # Challenge 1
# word = input("Give me the word: ")
# word_dict = {}
# counter = 0
# for letter in word:
#     if letter in word_dict.keys():
#         word_dict[letter].append(counter)
#     else:
#         word_dict[letter] = [counter]
#     counter += 1
# print(word_dict)

# # Challenge 2
# import re


# items_purchase = {
#   "Water": "$1",
#   "Bread": "$3",
#   "TV": "$1,000",
#   "Fertilizer": "$20"
# }
# wallet = "$300"

# # items_purchase = {
# #   "Apple": "$4",
# #   "Honey": "$3",
# #   "Fan": "$14",
# #   "Bananas": "$4",
# #   "Pan": "$100",
# #   "Spoon": "$2"
# # }
# # wallet = "$100" 

# # items_purchase = {
# #   "Phone": "$999",
# #   "Speakers": "$300",
# #   "Laptop": "$5,000",
# #   "PC": "$1200"
# # }
# # wallet = "$1"


#   # making the values in dict an int
# edited_items_purchase = {k : v[1:] for k, v in items_purchase.items()}
# for key in edited_items_purchase.keys():
#     # this comment block is to do render to ints without regexp
#     # str_value = ""
#     # for letter in [c for c in edited_items_purchase[key] if c != ","]:
#     #   str_value += letter      
#     edited_items_purchase[key] = int(re.sub(r'[^0-9]', '', items_purchase[key]))
# print(f"Int prices are: \n{edited_items_purchase}")
#   # making the wallent value an int
# edited_wallet = int(re.sub(r'[^0-9]', '', wallet))
# print(f"int of wallet is:\n{edited_wallet}")

# affordable = [k for k, v in edited_items_purchase.items() if (edited_items_purchase[k] <= edited_wallet)]
# affordable.sort()
# if len(affordable) < 1:
#   print("Nothing")
# else:
#   print(affordable)