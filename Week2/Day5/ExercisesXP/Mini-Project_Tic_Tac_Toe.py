field = []
turn_counter = 0
player = ""
real_turn = ()


def init_board():
    global field
    for i in range(3):
        field.insert(i, [])
        for j in range(3):
            field[i].append(".")


def display_board():
    global field
    display = []
    display.append("*" * 17)
    display.append(f"*   {field[0][0]} | {field[0][1]} | {field[0][2]}   *")
    display.append(f"*  ___|___|___  *")
    display.append(f"*   {field[1][0]} | {field[1][1]} | {field[1][2]}   *")
    display.append(f"*  ___|___|___  *")
    display.append(f"*   {field[2][0]} | {field[2][1]} | {field[2][2]}   *")
    display.append(f"*  ___|___|___  *")
    display.append("*" * 17)
    for string in display:
        print(string)


def turns():
    global player
    global turn_counter
    global field

    while not check_win():
        # turn
        if turn_counter % 2:
            player = "O"
        else:
            player = "X"
        player_input(player)
        turn_counter += 1


def player_input(player):
    global field
    global real_turn

    while True:
        usr_turn = input(
            f"Player '{player}', enter a ROW and a COLUMN between 1 and 3(e.g. '1 2'): ")
        real_turn = list(usr_turn.split())
        for i in range(len(real_turn)):
            real_turn[i] = int(real_turn[i]) - 1
        if field[real_turn[0]][real_turn[1]] == ".":
            field[real_turn[0]][real_turn[1]] = player
            display_board()
            break
        else:
            print("This place is not free")


def check_win() -> bool:
    global field

    # start
    if turn_counter == 0:
        return False
    # col and row win check based on last turn
    col_win = field[real_turn[0]][real_turn[1]] == field[(real_turn[0] + 1) % 3][(
        real_turn[1]) % 3] == field[(real_turn[0] + 2) % 3][(real_turn[1]) % 3]
    row_win = field[real_turn[0]][real_turn[1]] == field[(real_turn[0]) % 3][(
        real_turn[1] + 1) % 3] == field[(real_turn[0]) % 3][(real_turn[1] + 2) % 3]
    if col_win or row_win:
        print(f"Player {player} won!")
        return True
    # diag check
    on_diag = field[real_turn[0] % 2] == field[real_turn[1] % 2]
    if on_diag:
        reverse_diag_win = field[real_turn[0]][real_turn[1]] == field[(real_turn[0] + 1) % 3][(
            real_turn[1] + 1) % 3] == field[(real_turn[0] + 2) % 3][(real_turn[1] + 2) % 3]
        forward_diag_win = field[real_turn[0]][real_turn[1]] == field[(real_turn[0] + 1) % 3][(
            real_turn[1] - 1) % 3] == field[(real_turn[0] + 2) % 3][(real_turn[1] - 2) % 3]
        if forward_diag_win or reverse_diag_win:
            print(f"Player {player} won!")
            return True
    # filled
    for i in field:
        for j in i:
            if j == ".":
                return False
    else:
        print("No free fields, it`s a tie!")
        return True


def play():
    init_board()
    display_board()
    turns()


play()
