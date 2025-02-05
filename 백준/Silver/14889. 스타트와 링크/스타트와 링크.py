import sys
input = sys.stdin.readline

from itertools import combinations

N = int(input())
SCORE = [list(map(int, input().split())) for _ in range(N)]

def calculate(team):
    score = 0
    for i in range(len(team) - 1):
        for j in range(i + 1, len(team)):
            score += SCORE[team[i]][team[j]] + SCORE[team[j]][team[i]]
    return score

COMBIS = list(combinations(range(N), N // 2))
min_diff = float('inf')

for i in range(len(COMBIS) // 2):  # 백트래킹 제거, 단순 반복문으로 변경
    t1, t2 = COMBIS[i], COMBIS[-(i + 1)]
    s1, s2 = calculate(t1), calculate(t2)
    
    min_diff = min(abs(s1 - s2), min_diff)
    
    if min_diff == 0:
        break  # 0이면 더 이상 탐색할 필요 없음

print(min_diff)