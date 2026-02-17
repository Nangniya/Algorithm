import sys

sys.setrecursionlimit(10**6)
input = sys.stdin.readline

def solve():
    n = int(input())

    adj = [[] for _ in range(n + 1)]
    for _ in range(n - 1):
        u, v = map(int, input().split())
        adj[u].append(v)
        adj[v].append(u)
    
    # dp[node][0] = node가 얼리어답터가 아닐 때 최소값
    # dp[node][1] = node가 얼리어답터일 때 최소값
    dp = [[float('inf'), float('inf')] for _ in range(n + 1)]
    visited = [False] * (n + 1)

    def dfs(node):
        visited[node] = True
        dp[node][1] = 1
        dp[node][0] = 0

        for neighbor in adj[node]:
            if not visited[neighbor]:
                dfs(neighbor)
                dp[node][0] += dp[neighbor][1] # 얼리어답터가 아닐 경우
                dp[node][1] += min(dp[neighbor][0], dp[neighbor][1])  # 우수 마을일 경우 자식은 얼리어답터가 될 수 없음

    dfs(1)
    print(min(dp[1][0], dp[1][1]))

if __name__ == "__main__":
    solve()