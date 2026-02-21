import sys
input = sys.stdin.readline

def solve():
    N = int(input())
    TP = [list(map(int, input().split())) for _ in range(N)]
    dp = [0] * (N + 1)
    
    for i in range(N - 1, -1, -1):
        day, price = TP[i]
        dp[i] = max(dp[i + 1], price + dp[i + day]) if i + day <= N else dp[i + 1]

    print(dp[0])

if __name__ == "__main__":
    solve()