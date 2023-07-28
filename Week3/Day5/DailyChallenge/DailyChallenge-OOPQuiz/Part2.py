import random
import textwrap


class Deck():
    def __init__(self) -> None:
        self.cards_deck = []
        for suit in Card.suits:
            for amount in Card.values:
                self.cards_deck.append((suit, amount))
        self.shuffle()

    def shuffle(self):
        try:
            if len(self.cards_deck) != 52:
                raise ValueError(
                    f'There are not 52 cards. They are {len(self.cards_deck)}')
        except ValueError as err:
            print(err)
        else:
            random.shuffle(self.cards_deck)

    def deal(self) -> tuple:
        try:
            if self.card_in_deck():
                dealt = self.cards_deck.pop()
            else:
                dealt = None
                raise ValueError('There is no cards in deck')
        except ValueError as err:
            print(err)
        return dealt
    
    # deal 'amount' of cards from the deck
    def deal_cards(self, amount: int) -> list[tuple]:
        dealt = []
        for i in range(amount):
            dealt.append(self.deal())
            
    # if card exists in deck check
    def card_in_deck(self) -> bool:
        return len(self.cards_deck) > 0

    # see the deck
    def display_deck(self) -> None:
        hearts = []
        diamonds = []
        clubs = []
        spades = []
        self.sorted_deck = [hearts, diamonds, clubs, spades]
        for card in self.cards_deck:
            for suit in Card.suits:
                if card[0] == suit:
                    self.sorted_deck[Card.suits.index(suit)].append(card)
        for suit in self.sorted_deck:
            suit.sort(key=lambda x: x[1])

        print(textwrap.dedent(f'''
                                ***Deck***
                                hearts: {hearts}
                                diamonds: {diamonds}
                                clubs: {clubs}
                                spades: {spades}'''))
        print(textwrap.dedent(f'''\
                               hearts amount: {len(hearts)}
                               diamonds amount: {len(diamonds)}
                               clubs amount: {len(clubs)}
                               spades amount: {len(spades)}
                               **********
                               '''))


class Card():
    suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
    values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K']
    values = [str(v) for v in values]


if __name__ == '__main__':
    deck = Deck()
    deck.display_deck()
    deck.deal()
    deck.display_deck()
    deck.deal_cards(20)
    deck.display_deck()
    deck.deal_cards(34)
    deck.display_deck()
