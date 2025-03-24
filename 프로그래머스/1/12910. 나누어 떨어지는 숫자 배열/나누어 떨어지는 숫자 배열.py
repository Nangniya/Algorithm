def solution(arr, divisor):
    answer = []
    for n in arr:
        if n % divisor == 0:
            answer.append(n)
    answer.sort()
    return answer if answer else [-1]