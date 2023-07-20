import random

wordslist = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share', 'credit card', 'rush', 'south']

incorrect_turns = 0
guessed_letters = set()
pics = ['''
   +---+
       |
       |
       |
      ===''', '''
   +---+
    O   |
        |
        |
       ===''', '''
    +---+
    O   |
    |   |
        |
       ===''', '''
    +---+
    O   |
   /|   |
        |
       ===''', '''
    +---+
    O   |
   /|\  |
        |
       ===''', '''
    +---+
    O   |
   /|\  |
   /    |
       ===''', '''
    +---+
    O   |
   /|\  |
   / \  |
       ===''']

def game():
    global incorrect_turns
    global asteriscs_left
    word = random.choice(wordslist) 
    length = len(word)
    asteriscs_left = length
    asterisc = "*"
    current_word_list = list(length * asterisc)
    current_word = "".join(current_word_list)
    print(f'The word is : {current_word}')
    
    while True :
        # guess
        letter = input("input the letter: ")
                # counting failed guesses
        if letter not in word:
            print(pics[incorrect_turns])             
            incorrect_turns += 1
        else:
                # showing guessed letters
            if letter not in guessed_letters :
                for i in range(length):
                    if word[i] == letter :
                        current_word_list[i] = letter
                        asteriscs_left -= 1
                        print(asteriscs_left)
                guessed_letters.add(letter)
            current_word = "".join(current_word_list)
        print(current_word)
        # fail
        if incorrect_turns == len(pics) :
            print(f"You fail. The word was '{word}'.")
            break
        #  win
        if asteriscs_left == 0 :
            print(f"You won! The word is '{word}'.")
            break
            
game()