from itertools import combinations_with_replacement
from collections import Counter

def solution(n, info):
    max_diff = 0
    max_comb = {}
    
    def calculate_score(combi):
        score1, score2 = 0, 0
        for i in range(1, 11):
            if info[10 - i] < combi.count(i):
                score2 += i
            elif info[10 - i] > 0:
                score1 += i
        return score1, score2
    
    for combi in combinations_with_replacement(range(11), n):
        cnt = Counter(combi)
        score1, score2 = calculate_score(combi)
        diff = score2 - score1
        if max_diff < diff:
            max_diff = diff
            max_comb = cnt
    
    if max_diff > 0:
        answer = [0] * 11
        for score in max_comb:
            answer[10 - score] = max_comb[score]
        return answer
    else:
        return [-1]
    