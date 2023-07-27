from anagram_checker import AnagramChecker

def show_menu() -> str or None:
    while True:
        try:
            usr_word = input('Type in the word or "exit": ')
            if usr_word == 'exit':
                break
            if usr_word.isalpha():
                usr_word = usr_word.strip().upper()
                print(f'YOUR WORD : {usr_word}')
                return usr_word
            else:
                raise ValueError('You shoul type just 1 word without any additional symbols')
        except ValueError as err:
            print(err)
        
def main():
    anagram_cheker = AnagramChecker('sowpods.txt')
    while True:
        word = show_menu()
        if word != None: # if word isn`t 'exit'
            anagram_cheker.is_valid_word(word)
            anagram_cheker.get_anagrams(word)
        else:
            break


if __name__ == '__main__':
    main()