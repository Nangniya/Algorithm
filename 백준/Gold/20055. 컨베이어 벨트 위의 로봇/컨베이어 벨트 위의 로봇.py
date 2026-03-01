import sys
from collections import deque
input = sys.stdin.readline

def solve():
    N, K = map(int, input().split())
    durability = deque(list(map(int, input().split()))) # 내구도
    robots = deque([False] * N) # 로봇 존재 여부 (위 N칸만 관리)

    step = 0
    while True:
        step += 1
        durability.rotate(1)
        robots.rotate(1)
        robots[N - 1] = False

        for i in range(N - 2, -1, -1):
            if robots[i] and not robots[i + 1] and durability[i + 1] >= 1:
                robots[i] = False
                robots[i + 1] = True
                durability[i + 1] -= 1
        robots[N - 1] = False

        if durability[0] > 0:
            robots[0] = True
            durability[0] -= 1
        
        if durability.count(0) >= K:
            print(step)
            break

if __name__ == "__main__":
    solve()