from collections import Counter

def solution(k, tangerine):
    counter = Counter(tangerine)
    answer = total = 0
    sorted_invent = sorted(counter.values(), reverse=True)
    for cnt in sorted_invent:
        if total >= k:
            return answer
        answer += 1
        total += cnt
    return answer