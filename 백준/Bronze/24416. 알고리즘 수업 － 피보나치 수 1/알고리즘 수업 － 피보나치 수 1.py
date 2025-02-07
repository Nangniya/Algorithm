import sys
input = sys.stdin.readline

N = int(input())

fibo = [0] * (N + 1)  
fibo[1] = 1
fibo[2] = 1
for i in range(3, N + 1):
    fibo[i] = fibo[i - 1] + fibo[i - 2]

recursion_answer = fibo[N]  # if n == 1 or n == 2 실행 횟수
dp_answer = N - 2

print(f"{recursion_answer} {dp_answer}")