import random
import requests, psycopg2

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
                    name = name.replace("'", "''")
                    capital = capital.replace("'", "''")
                    flag = flag.replace("'", "''")
                    subregion = subregion.replace("'", "''")
                
                    query = f'''
                            insert into country 
                            (country_name, capital_name, flag, subregion, population) 
                            values ('{name}', '{capital}', '{flag}', '{subregion}', '{population}');
                            '''
                    cursor.execute(query)
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
    
if __name__ == "__main__":
    country_insert(get_random_countries())