from game import Game
from textwrap import dedent


def get_user_menu_choice():
    menu_actions = ['g', 's', 'q']
    main_menu_choice = ''
    main_menu = dedent('''
        MENU
    ************
    (g) to play a new game
    (s) to show score
    (q) to exit
    ''')

    print(main_menu)
    while True:
        main_menu_choice = input()
        if main_menu_choice in menu_actions:
            break
    return main_menu_choice


def print_results(results):
    print(dedent(f'''
        Game Results:
        You won {results['won']} times 
        You lost {results['loss']} times
        You drew {results['draw']} times'''))


def main():
    game = Game()
    while True:
        menu_choice = get_user_menu_choice()
        if menu_choice == 'q':
            print_results(game.result)
            print(dedent('''
                Thank you for playing!
                Bye-bye!'''))
            break
        elif menu_choice == 'g':
            game.result[game.play()] += 1
        elif menu_choice == 's':
            print_results(game.result)


if __name__ == '__main__':
    main()
