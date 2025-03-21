def solution(d, budget):
    d.sort()
    total = answer = 0
    for p in d:
        if total + p <= budget:
            total += p
            answer += 1
        else:
            return answer
    return answer