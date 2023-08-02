# import psycopg2


# # connection to database
# connection = psycopg2.connect(
#     database = "hollywood",
#     user = 'postgres',
#     password = 'Sd785r',
#     host = 'localhost',
#     port = '5432'
# )

# def retrieve_actors():
#     try:
#         with connection:
#             with connection.cursor() as curs:
#                 query = "SELECT * FROM actors"
#                 curs.execute(query)
#                 data = curs.fetchall()
#                 print(data)
#     except Exception as err:
#         print(err)

# def retrieve_david_actors():
#     try:
#         with connection:
#             with connection.cursor() as curs:
#                 query = "SELECT * FROM actors where first_name like '%David%'"
#                 curs.execute(query)
#                 data = curs.fetchall()
#                 print(data)
            
#     except Exception as err:
#         print(err)
        
# def retrieve_actors_by_firstname (first_name):
#     try:
#         with connection:
#             with connection.cursor() as curs:
#                 query = f"SELECT * FROM actors where first_name ilike '%{first_name}%'"
#                 curs.execute(query)
#                 data = curs.fetchall()
#                 print(data)
            
#     except Exception as err:
#         print(err)
    
    
# def insert_actor (first_name):
#     try:
#         with connection:
#             with connection.cursor() as curs:
#                 query = f"SELECT * FROM actors where first_name ilike '%{first_name}%'"
#                 curs.execute(query)
#                 data = curs.fetchall()
#                 print(data)
            
#     except Exception as err:
#         print(err)
# # retrieve_actors()
# # retrieve_actors_by_firstname('david')

# connection.close()


###############################
########## Lises code #########
###############################


import psycopg2

# CONNECT TO THE DATABASE
connection = psycopg2.connect(
    database="Juil2023", #your database name
    user='postgres',
    password='root',
    host='localhost', #or IP address
    port='5432'
)

def retrieve_actors () :
    print("retrieving an actor...")
    try :
        with connection:
            with connection.cursor() as curs: #open and close the cursor
                query = "SELECT * FROM actor"
                curs.execute(query)
                data = curs.fetchall()
                print(data)
    except Exception as err :
        print(err)

# retrieve_actors()         


def retrieve_actors_numberoscars () :
    try :
        with connection:
            with connection.cursor() as curs: #open and close the cursor
                query = "SELECT number_oscars FROM actor"
                curs.execute(query)
                data = curs.fetchall() #get a list of tuples
                print(data) #or do a loop
    except Exception as err :
        print(err)

# retrieve_actors_numberoscars() 

def retrieve_actors_cars (last_name) :
    try :
        with connection:
            with connection.cursor() as curs: #open and close the cursor
                query = f"""
                SELECT first_name, brand, color
                FROM actor
                INNER JOIN car ON actor.id = car.owner_id
                WHERE last_name = '{last_name}'
                """
                curs.execute(query)
                data = curs.fetchone() #get only 1 tuple
                print(data) #('George', 'Mazda', 'white')
                
                # for info in data :
                #     print(info)

                print(f"{data[0]} has a {data[2]} {data[1]}")

    except Exception as err :
        print("IN THE EXCEPT", err)

# retrieve_actors_cars("Clooney")
# retrieve_actors_cars("Damon") 

# *args --> tuple
def insert_actor (*info) :
    print("adding an actor...")
    # info will look like this ("Johnny", "Depp", 1)
    try :
        with connection:
            with connection.cursor() as curs: #open and close the cursor
                query = f"""
                INSERT INTO actor (first_name, last_name, number_oscars)
                VALUES {info}
                """
                curs.execute(query)
                connection.commit() #actually commit the data

    except Exception as err :
        print("IN THE EXCEPT", err)

insert_actor("Johnny", "Depp", 1)
retrieve_actors()

connection.close() #close the connection