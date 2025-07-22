import sys

from collections import deque

def solution():
    input_str = sys.stdin.readline().strip()
    N = int(input_str)

    start_search = N - (9 * len(input_str))
    
    for i in range(max(1, start_search), N):
        digit_sum = sum(int(digit) for digit in str(i))

        if i + digit_sum == N:
            return i
    
    return 0

print(solution())