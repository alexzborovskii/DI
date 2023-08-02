import textwrap
from menu_item import Menu_item
from menu_manager import Menu_Manager

def add_item_to_menu():
    inp_name = input('Type in the items name: ')
    inp_price = input('Type in the items price: ')
    new_item = Menu_item(inp_name, inp_price)
    try:
       new_item.save()
    except Exception as err:
        print(err)
    else:
        print(f'item {inp_name}, {inp_price} was added successfully')

def remove_item_from_menu():
    inp_name = input('Type in the items name you want to remove: ')
    rm_item = Menu_item(inp_name, 0)
    try:
        rm_item.delete()
    except Exception as err:
        print(err)
    else:
        print('Removing completed')

def update_item_from_menu():
    inp_name = input('Type in the items name you want to update: ')
    inp_price = input('Type in the items price you want to update: ')
    new_name = input('Type in the NEW items name: ')
    new_price = input('Type in the NEW items price: ')
    ui_item = Menu_item(inp_name, inp_price)
    try:
        ui_item.update(new_name, new_price)
    except Exception as err:
        print(err)
    else:
        print('Update completed')
        
def show_restaurant_menu():
    print(Menu_Manager.all_items())
    
def show_item():
    inp_name = input('Type in the items name to display: ')
    try:
       print(Menu_Manager.get_by_name(inp_name))
    except Exception as err:
        print(err)
        
def show_user_menu():
    while True:
        display_str = textwrap.dedent("""
                View an Item (V)
                Add an Item (A)
                Delete an Item (D)
                Update an Item (U)
                Show the Menu (S)
                Exit (exit)
        """)
        print(display_str)
        command = input('Type in command (one letter): ')
        if command == 'V':
            show_item()
        elif command == 'A':
            add_item_to_menu()
        elif command == 'D':
            remove_item_from_menu()
        elif command == 'U':
            update_item_from_menu()
        elif command == 'S':
            show_restaurant_menu()
        elif command == 'exit':
            break
        
if __name__ == '__main__':
    show_user_menu()