import sys
from collections import deque

N, K = map(int, sys.stdin.readline().split())

def solution(N, K):
    people = deque(range(1, N + 1))
    result = []

    while people:
        for _ in range(K - 1):
            people.append(people.popleft())
        
        result.append(people.popleft())
    
    return "<" + ", ".join(map(str, result)) + ">"

print(solution(N, K))

