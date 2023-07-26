def colorize(text, color):
    colors = ('cyan', 'yellow', 'blue', 'green', 'magenta')
    try:
        if color not in colors:
            raise ValueError('Color not in colors')
        if not isinstance(text, str):
            raise TypeError('Text is not a string')
    except ValueError:
        print('Value error')
    except TypeError:
        print('Type error')
    else:
        print(text, color)

        
colorize('asdf', 'asdf')
colorize(123, 'yellow')
colorize('asdf', 'blue')
