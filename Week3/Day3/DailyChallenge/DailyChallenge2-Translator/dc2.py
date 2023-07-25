from googletrans import Translator
french_words = ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"]
dictionary = {}
trans = Translator()

translations = trans.translate(french_words, 'en', 'fr')
for translation in translations:
    key = translation.origin
    dictionary[key] = translation.text
    
print(dictionary)
# {"Bonjour": "Hello", "Au revoir": "Goodbye", "Bienvenue": "Welcome", "A bientôt": "See you soon"}
