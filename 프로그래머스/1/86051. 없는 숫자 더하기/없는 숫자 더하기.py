def solution(numbers):
    answer = 0
    for i in range(10):
        answer += i
    for n in numbers:
        answer -= n
    return answer