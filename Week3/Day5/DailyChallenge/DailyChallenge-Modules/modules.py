import requests
import time


def get_data(address):
    try:
        t1 = time.time()
        response = requests.get(address)
        t2 = time.time()
        delta_t = t2 - t1
        if response.status_code >= 202:
            print(response.status_code, end=', ')
            raise Exception("no data found")
        else:
            print(f'{address} : took {delta_t}s')
    except Exception as err:
        print(err)


sources = [
    "http://google.com",
    "https://www.ynet.co.il/",
    "https://www.imdb.com/",
    "https://www.youtube.com/"
]

if __name__ == '__main__':
    for item in sources:
        get_data(item)
