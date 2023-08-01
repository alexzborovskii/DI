# def subsetsum(numbers: list, target: int) -> bool:
#     for number in numbers:
#         for i in range(len(numbers)):
#             if number + numbers[i] == target:
#                 return True
#     else:
#         return False
    
    
def subsetsum(numbers: list, target: int) -> bool:
    list_obj = {}
    for i in numbers:
        number_to_find = target - i
        if number_to_find in list_obj:
            return True
        list_obj[i] = number_to_find
    else:
        return False
    
            

nums = [12, -7, 20, 1, 4, -10, -1]
print(subsetsum(nums, 1)) # False
print(subsetsum(nums, 2)) # True: 12,  -10
print(subsetsum(nums, 3)) # True: 4,  -1
print(subsetsum(nums, 4)) # False

