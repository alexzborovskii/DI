def insert_country_name(item):
    query = f'''
            insert into country (country_name) values ('{item['name']['common']}')
            '''
    return query

def insert_capital(item):
    query = f'''
            INSERT INTO capital (capital_name, country_id) values 
            ('{item['capital'][0]}', select country_id from country where country_name = '{item['name']['common']}')
            '''
    return query


def insert_add_info(item):
        query = f"""
                INSERT INTO additional_info (country_id, flag, subregion, population) values 
                (select country_id from country where country_name = '{name}', '{flag}', '{subregion}', '{population}')
                """
        return query