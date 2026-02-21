import sys
import math
input = sys.stdin.readline

def solve():
    N = int(input())
    students = list(map(int, input().split()))
    B, C = list(map(int, input().split()))
    
    answer = 0
    for student in students:
        remain = student - B
        answer += 1
        if remain > 0:
            answer += math.ceil(remain / C)
    print(answer)


if __name__ == "__main__":
    solve()