def solution(s):
    answer = [0, 0]
    while s != '1':
        zero_cnt = s.count('0')
        answer[0] += 1
        answer[1] += zero_cnt
        s = bin(s.count('1'))[2:]
    return answer