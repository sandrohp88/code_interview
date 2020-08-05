def is_palindrome(s):
    for i in range(len(s)//2):
        if s[i] != s[len(s) - 1 - i]:
            return False
    return True


def is_palindrem_v2(s):
  # ~ bit inversion Ex: 1001 -> 0110
  # s[~i] = s[-(1+i)]
    return all(s[i] == s[~i] for i in range(len(s)//2))


print(is_palindrome('sandro'))
print(is_palindrome('herrera'))
print(is_palindrome('reinier'))
print(is_palindrome('ana'))
