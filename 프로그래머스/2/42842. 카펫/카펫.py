def yaksu(n):
    result = []
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            result.append(i)
    return result

def solution(brown, yellow):
    multiplied = brown + yellow
    for n in yaksu(multiplied):
        a, b = n, multiplied // n
        if (a - 2) * (b - 2) == yellow:
            return [b, a]