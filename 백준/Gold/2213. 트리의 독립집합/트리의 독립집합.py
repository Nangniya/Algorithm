import sys

sys.setrecursionlimit(10**6)
input = sys.stdin.readline

def solve():
    n = int(input())
    weight = [0] + list(map(int, input().split()))

    adj = [[] for _ in range(n + 1)]
    for _ in range(n - 1):
        u, v = map(int, input().split())
        adj[u].append(v)
        adj[v].append(u)
    
    # dp[node][0] = node가 집합에 포함되지 않을 때
    # dp[node][1] = node가 집합에 포함될 때
    dp = [[0, 0] for _ in range(n + 1)]
    visited = [False] * (n + 1)

    def dfs(node):
        visited[node] = True
        dp[node][0] = 0
        dp[node][1] = weight[node]

        for neighbor in adj[node]:
            if not visited[neighbor]:
                dfs(neighbor)
                dp[node][0] += max(dp[neighbor][0],dp[neighbor][1])
                dp[node][1] += dp[neighbor][0]

    # 역추적 (독립집합에 속한 노드 찾기)
    res_nodes = []
    def trace(node, include, parent):
        if include:
            res_nodes.append(node) # 포함되는게 큰 쪽을 이미 선택했기 때문에 확정. 담는다.
            for neighbor in adj[node]:
                if neighbor != parent:
                    trace(neighbor, False, node)
        else:
            for neighbor in adj[node]:
                if neighbor != parent:
                    if dp[neighbor][1] > dp[neighbor][0]:
                        trace(neighbor, True, node)
                    else:
                        trace(neighbor, False, node)
    
    dfs(1)
    print(max(dp[1][0], dp[1][1]))

    if dp[1][1] > dp[1][0]:
        trace(1, True, 0)
    else: 
        trace(1, False, 0)

    res_nodes.sort()
    print(*(res_nodes))

if __name__ == "__main__":
    solve()