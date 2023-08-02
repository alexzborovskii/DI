from config import manage_connection
from menu_item import *

# import menu_item

# is to manage several items
class Menu_Manager():
    
    @staticmethod
    def get_by_name(name):
        query = f'''
                SELECT * FROM menu_items
                WHERE item_name = '{name}'
                '''
        item = manage_connection(query, 'select')
        if item == []:
            return None
        else:
            return item[0]
        
    @staticmethod
    def all_items() -> list:
        query = f'''
                SELECT * FROM menu_items
                '''
        return manage_connection(query, 'select')
        
if __name__ == '__main__':
    print(Menu_Manager.get_by_name('fish_salad'))
    print(Menu_Manager.all_items())
    
    # item = Menu_item('Burger', 35)
    # item.save()
    # item.delete()
    # item.update('Veggie Burger', 37)
    # item2 = Menu_Manager.get_by_name('Beef Stew')
    # items = Menu_Manager.all_items()
    # print(item2)