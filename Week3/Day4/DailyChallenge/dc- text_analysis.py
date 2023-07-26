from time import time


def performance(fn):
    def wrapper(*args, **kawrgs):
        t1 = time()
        result = fn(*args, **kawrgs)
        t2 = time()
        print(f'took {t2-t1} s')
        return result
    return wrapper

class Text:
    
    def __init__(self, string) -> None:
        self.string = string
        self.word_list = list(string.split())
        
        # FOR FASTER COUNTING:
        self.words = {}
        for word in self.word_list:
            if word in self.words.keys():
                self.words[word] += 1
            else:
                self.words[word] = 1
    
    def freq(self, word):
        word_freq = self.word_list.count(word)
        return word_freq
    
    # slower way
    # 
    @performance
    def most_common1(self):
        most_common_word = ''
        most_common_counter = 0
        for word in self.word_list:
            if self.freq(word) > most_common_counter:
                most_common_word = word
                most_common_counter = self.freq(word)
        return most_common_word
    
    # faster way
    @performance
    def most_common2(self):
        most_common_word = max(self.words, key=self.words.get)
        return most_common_word
            
    # slower way
    @performance
    def uniqe_words1(self):
        uniqe_list = []
        for word in self.word_list:
            if self.freq(word) == 1:
                uniqe_list.append(word)
        return uniqe_list
    
    # faster way   
    def uniqe_words2(self):
        uniqe_list = [k for k, v in self.words.items() if v == 1]
        return uniqe_list
    
    
        
    @classmethod      
    def from_file(cls, file_name: str):
        file_str = ''
        with open('the_stranger.txt', 'r') as file:
            file_list = file.readlines()
        file_list_clean = [x.strip() for x in file_list]
        file_str +=" ".join(file_list_clean)
        return cls(file_str)
            
            
            
if __name__ == '__main__':
    # my_string = 'A good book would sometimes cost as much as a good house.'
    # text = Text(my_string)
    # print(text.freq('good'))
    # print(text.most_common())
    file_text = Text.from_file('the_stranger.txt')
    print(file_text.freq('good'))
    print(file_text.most_common1())
    print(file_text.most_common2())
    print(file_text.uniqe_words1())
    print(file_text.uniqe_words2())
    