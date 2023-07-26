from random import choices

def get_words_from_file():
    
    with open('sowpods.txt', 'r') as file:
        mylist = file.readlines()
        return mylist

def get_random_sentence(length):
    my_list = get_words_from_file()
    sentence_list = choices(my_list, k=length)
    sentence = ' '.join([w.strip().lower() for w in sentence_list])
    sentence = sentence.capitalize() + '.'
    return sentence

def main():
    print("This program prints random sentence of inputed length")
    usr_len = int(input('Input the length of the sentence between 2 and 20: '))
    if usr_len > 20 or usr_len <2:
        raise ValueError('Length is not correct') 
    else:
        print(get_random_sentence(usr_len))
        

if __name__ == '__main__':
    main()