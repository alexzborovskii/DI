class AnagramChecker():

    def __init__(self, file_name) -> None:
        with open(file_name, 'r') as file:
            self.words_list = file.read().split()

    @staticmethod
    def is_anagram(word1: str, word2: str) -> bool:
        word1 = word1.upper()
        word2 = word2.upper()
        return sorted(word1) == sorted(word2)

    def is_valid_word(self, word) -> None:
        self.word = word.upper()
        is_valid = self.word in self.words_list
        if is_valid:
            print(f"'{word}' is a valid English word.")
        else:
            print(f"'{word}' is not an English word")

    def get_anagrams(self, word) -> list[str]:
        anagrams_list = []
        for item in self.words_list:
            if AnagramChecker.is_anagram(item, word):
                anagrams_list.append(item)
        anagrams_string = ' '.join(anagrams_list)
        print(f'Anagrams for your word: {anagrams_string}')
        return anagrams_list
