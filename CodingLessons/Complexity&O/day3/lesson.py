# sorted_array = list(range(1000))
# value_to_search = 50

def binary_search(array, value_to_search):
    right = len(array)
    left = 0
    middle = array[len(array) // 2]
    iterations = 0
    
    while left == middle or right == middle:
        iterations += 1
        
        if middle == value_to_search:
            print('found')
            print(f'{iterations}')
            break
        elif middle < value_to_search:
            left = middle
            middle = (left + right) // 2
        elif middle > value_to_search:
            right = middle
            middle = (left + right) // 2
        else:
            print('No such value')
            break
        print(f'left {left}')
        print(f'right {right}')
    else:
        print('there is no value')
        
some_array = list(range(1000))
value = 1500
binary_search(some_array, value)
