from config import manage_connection

# is to manage 1 item
class Menu_item():
    
    def __init__(self, name, price) -> None:
        self.name = name
        self.price = price
    
    def save(self):
        query = f"""
                INSERT INTO menu_items (item_name, item_price)
                VALUES {(self.name,self.price)}
                """
        manage_connection(query, "insert")
    
    def delete(self):
        query = f"""
                DELETE FROM menu_items 
                where item_name = '{(self.name)}'
                """
        manage_connection(query, "delete")
    
    def update(self, new_name, new_price):
        query = f"""
                UPDATE menu_items
                SET
                item_name = '{new_name}',
                item_price = {new_price}
                WHERE 
                item_name = '{(self.name)}'
                """
        manage_connection(query, "update")
    
    
if __name__ == '__main__':
    salad_mimoza = Menu_item('salad mimoza', 25 )
    salad_mimoza.save()
    burger = Menu_item('burger', 50 )
    burger.save()
    # salad_mimoza.delete()
    salad_mimoza.update('fish_salad', 40)