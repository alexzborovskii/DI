import random
import requests, json, psycopg2
from methods import *

def country_insert(countries):
    connection = None
    try : 
        connection = psycopg2.connect(
            database="countries", 
            user='postgres',
            password='Sd785r',
            host='localhost', 
            port='5432'
        )
        
        with connection:
            with connection.cursor() as cursor: 
                
                for country in countries:
                    name = country['name']['common']
                    capital = country['capital'][0]
                    flag = country['flag']
                    subregion = country['subregion']
                    population = country['population']

                    name_query = f'''
                                insert into country (country_name) values ("{name}")
                                '''
                    capital_query = f'''
                                    INSERT INTO capital (capital_name, country_id) values 
                                    ("{capital}", (select country_id from country where country_name = "{name}"))
                                    '''
                    add_info_query = f"""
                                    INSERT INTO additional_info (country_id, flag, subregion, population) values 
                                    ((select country_id from country where country_name = '{name}'), '{flag}', '{subregion}', '{population}')
                                    """

                                      
        with connection:
            with connection.cursor() as cursor:
                cursor.execute(name_query)
                connection.commit()
        
        with connection:
            with connection.cursor() as cursor:
                cursor.execute(capital_query)
                connection.commit()
                
        with connection:
            with connection.cursor() as cursor:
                cursor.execute(add_info_query)
                connection.commit()
                    
            
                         

    except Exception as e :
        print(e)
    finally :
        if connection != None:
            connection.close()
            
    
            
            
def get_random_countries():
    try:    
        response = requests.get("https://restcountries.com/v3.1/all")
        if response.status_code >= 202:
            print(response.status_code, end=', ')
            raise Exception("no data found")
        else:
            countries_data = response.json()
            random_countries = random.sample(countries_data, 10)
            print(random_countries)
            
            return(random_countries)
    except Exception as err:
        print(err)
    
# print(get_random_countries())
country_insert(get_random_countries())