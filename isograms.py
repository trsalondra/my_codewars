def is_isogram(string):
    string = string.lower()

    testString = string[0]
    string.remove(testString[0])

    for char in string:
        print(char)
        
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
    
for char in a

print(string)
print(stringList)
