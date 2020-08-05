# string has all unique characters
# no additional data structure


def is_unique(s):
    # for each character check if it exists
    #  in the rest of the string
    for i in range(len(s)):
        if s[i] in s[i+1:]:
            return False
    return True


print(is_unique('Sandro'))
print(is_unique('Herrera'))
print(is_unique('a'))
print(is_unique('aa'))
print(is_unique('Lisette'))
