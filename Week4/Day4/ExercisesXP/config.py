import psycopg2

# is to manage the database connection
def manage_connection(query, type) :
    connection = None
    try : 
        connection = psycopg2.connect(
            database="restaurant", #your database name
            user='postgres',
            password='Sd785r',
            host='localhost', #or IP address
            port='5432'
        )

        with connection:
            with connection.cursor() as cursor: #it closes the transaction
                cursor.execute(query)
                if type != "select" :
                    connection.commit()
                else :
                    return cursor.fetchall()
    except Exception as e :
        print(e)
    finally :
        if connection != None:
            connection.close() #need to specificaly closed the connection
    