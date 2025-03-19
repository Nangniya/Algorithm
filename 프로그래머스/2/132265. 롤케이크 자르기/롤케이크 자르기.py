from collections import Counter

def solution(topping):
    answer = 0
    tc = Counter(topping)
    ts = set()
    for t in topping:
        ts.add(t)
        tc[t] -= 1
        if tc[t] == 0:
            tc.pop(t)
        if len(tc) == len(ts):
            answer += 1
    return answer
    