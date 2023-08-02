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
                    name = country.get("name", {"common"})
                    capital = country.get("capital", "")
                    flag = country.get("flags", {}).get("png", "")
                    subregion = country.get("subregion", "")
                    population = country.get("population", 0)

                    name_query = f"""
                                insert into country (country_name) values ('{name}')
                                """
                    capital_query = f"""
                                    INSERT INTO capital (capital_name, country_id) values 
                                    ('{capital}', select country_id from country where country_name = '{name}')
                                    """
                    add_info_query = f"""
                                    INSERT INTO additional_info (country_id, flag, subregion, population) values 
                                    (select country_id from country where country_name = '{name}', '{flag}', '{subregion}', '{population}')
                                    """

                    cursor.execute(name_query)
                    cursor.execute(capital_query)
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
            return(random_countries)
    except Exception as err:
        print(err)
    

country_insert(get_random_countries())