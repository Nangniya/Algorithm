def solution(n):
    digits = list(str(n))
    digits.sort(reverse=True)
    return int("".join(digits))