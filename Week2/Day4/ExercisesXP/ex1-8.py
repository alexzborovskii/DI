# # Exercise 1
# def display_message() :
#     print("In this course I`m learning python")
    
# display_message()



# # Exercise 2
# def favorite_book(title) :
#     print(f"One of my favorite books is {title}")
    
# favorite_book("Harry Potter")



# # Exercise 3
# def describe_city(city, country = "Iceland") :
#     print(f"{city} is in {country}")
    
# describe_city("London", "GB")
# describe_city("Reykjavik ")



# # Exercise 4
# import random

# def comp_num(usr_num) :
#     if 1 < usr_num < 100:
#         my_num = random.randint(1, 100)
#         if my_num == usr_num :
#             print(f"Success, {my_num} = {usr_num}")
#         else:
#             print(f"Fail, {my_num} != {usr_num}")
#     else:
#         print(f"Input number = {usr_num}. It`s not between 1 and 100, ")
        
# comp_num(0)
# comp_num(-100)
# comp_num(10)
# comp_num(99)
# comp_num(150)

# # Exercise 5
    # # 1-4
# def make_shirt(size, text):
#     print(f"The size of the shirt is: {size}. And the text is: {text}")

# make_shirt("M", "Best dog-dad ever")

    # # 5-8
# def make_shirt(size = "L", text = "I love Python"):
#     print(f"The size of the shirt is: {size}. And the text is: {text}")
    
# make_shirt()
# make_shirt("M")
# make_shirt("Different", "Best dog-mom ever")
# make_shirt(text = "I`m the key", size = "XXL")


# # Exercise 6
# magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']
# def show_magicians(m_list) :
#     for magician in m_list:
#         print(magician)

        
# def make_great(m_list) :
#     for i in range(len(m_list)) :
#         m_list[i] += " the Great"
        
# make_great(magician_names)
# show_magicians(magician_names)


# # Exercise 7
#     # 1-6
# import random

# def get_random_temp(usr_month_id) :
#     seasons = {"winter": [-10, 5], "spring": [0, 20], "summer": [15, 30], "autumn": [0, 20]}
#     if 1 <= usr_month_id <= 12:
#         usr_month_id %= 12
#         if usr_month_id <= 2:
#             user_season = "winter"
#         elif usr_month_id <= 5:
#             user_season = "spring"
#         elif usr_month_id <= 8:
#             user_season = "summer"
#         else :
#             user_season = "autumn"
#         curr_season = user_season 
#     else :
#         print("Random season")
#         curr_season = list(seasons.keys())[random.randint(0, 3)]
        
#     print(curr_season)
#     return round(random.uniform(seasons[curr_season][0], seasons[curr_season][1]), 2)
    
# def main():
#     usr_month_id = int(input("Whats the month? "))
#     rand_temp = get_random_temp(usr_month_id)
#     print(f"The temperature right now is {rand_temp} degrees Celsius.")
#     if rand_temp < 0:
#         print("Brrr, that’s freezing! Wear some extra layers today")
#     elif rand_temp < 16 :
#         print("Quite chilly! Don’t forget your coat")
#     elif rand_temp <= 23 :
#         print("Nice weather outside!")
#     elif rand_temp < 32 :
#         print("Feels hot. Take a bottle of water with you!")
#     elif rand_temp < 40 :
#         print("Don`t go outside, it`s too hot.")
    
# main()



# # Exercise 8
# data = [
#     {
#         "question": "What is Baby Yoda's real name?",
#         "answer": "Grogu"
#     },
#     {
#         "question": "Where did Obi-Wan take Luke after his birth?",
#         "answer": "Tatooine"
#     },
#     {
#         "question": "What year did the first Star Wars movie come out?",
#         "answer": "1977"
#     },
#     {
#         "question": "Who built C-3PO?",
#         "answer": "Anakin Skywalker"
#     },
#     {
#         "question": "Anakin Skywalker grew up to be who?",
#         "answer": "Darth Vader"
#     },
#     {
#         "question": "What species is Chewbacca?",
#         "answer": "Wookiee"
#     }
# ]


# wrong_answers = 0
# correct_answers = 0
# wrong_answers_list = []
    
# def display_result(correct_answers_counter, questions_bank):
#     print(f"{correct_answers_counter} of {len(questions_bank)} correct answers")
    
# def display_wrong_questions(wrong_answers_param):
#     for item in wrong_answers_param:
#         print(f"For question {item[0]} you answered {item[1]}, but correct answer is {item[2]}")

# def play():
#     global correct_answers
#     global wrong_answers
#     global wrong_answers_list
    
#     for question in data:
#         usr_answer = input(f"{question['question']} ")
#         if usr_answer == question['answer'] :
#             print("Correct")
#             correct_answers += 1
#         else :
#             print("Wrong")
#             wrong_answers += 1 
#             wrong_answers_list.append([question['question'], usr_answer, question['answer']])           
#     display_result(correct_answers, data)
#     display_wrong_questions(wrong_answers_list)
    
# play()