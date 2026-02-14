import heapq
import sys

def solution():
    input = sys.stdin.readline
    n = int(input())
    abs_heap = []

    for _ in range(n):
        x = int(input())
        
        if x != 0:
            # (절댓값, 실제값) 튜플로 푸시
            # 힙은 0번 인덱스(절댓값)를 먼저 비교하고, 같으면 1번 인덱스(실제값)를 비교함
            heapq.heappush(abs_heap, (abs(x), x))
        else:
            if not abs_heap:
                print(0)
            else:
                # 가장 우선순위가 높은(절댓값이 작거나, 실제값이 작은) 원소 팝
                print(heapq.heappop(abs_heap)[1])

solution()