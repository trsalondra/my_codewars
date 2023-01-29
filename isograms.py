# def is_isogram(string):
#     string = string.lower()

#     testString = string[0]
#     string.remove(testString[0])

#     for char in string:
#         print(char)
        
# print((is_isogram("Dermatoglyphics"))) # True
# print((is_isogram("isogram")) True
# print((is_isogram("aba")) # False, "same chars may not be adjacent" 
# print((is_isogram("moOse")) # False, "same chars may not be same case" 
# print((is_isogram("isIsogram")) # False 
# print((is_isogram("")) # True, "an empty string is a valid isogram"

string = "Dermatoglyphics"
string = string.lower()
stringList = []
alpfabet = "abcdefghijklmnopqrstuvwxyz"

for char in string:
    stringList.append(char)


print(stringList.remove("z"))

# for char in string:
#     if(stringList.remove(char)==-1)
#     stringList.remove(char)

# print(string)
# print(stringList)


# My JPMorgan HireVue questions: tell us about when you had to explain a new technology/difficult concept to someone; tell us what you like about JPMonopoly and about the training program specifically; tell us how you'd decide whether to use a list or an array; tell us about how you would test a new feature of an application; and there was one more in that vein.