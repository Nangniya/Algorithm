import sys
from collections import deque
input = sys.stdin.readline

def solve():
    gears = [deque(list(map(int, input().strip()))) for _ in range(4)]
    k = int(input())

    def rotate_gears(idx, direction):
        # 각 톱니바퀴가 어떻게 회전할지 저장 (0은 회전 안 함)
        directions = [0] * 4
        directions[idx] = direction

        for i in range(idx, 0, -1):
            if gears[i][6] != gears[i - 1][2]:
                directions[i - 1] = -directions[i]
            else:
                break # 극이 같으면 더 이상 전파되지 않음
        
        for i in range(idx, 3):
            if gears[i][2] != gears[i + 1][6]:
                directions[i + 1] = -directions[i]
            else:
                break
        
        for i in range(4): # 결정된 방향대로 모든 톱니바퀴 회전
            if directions[i] != 0:
                gears[i].rotate(directions[i])
    
    for _ in range(k):
        num, direct = map(int, input().split())
        rotate_gears(num - 1, direct)

    answer = 0
    for i in range(4):
        if gears[i][0] == 1:
            answer += (2 ** i)
    print(answer)

if __name__ == "__main__":
    solve()