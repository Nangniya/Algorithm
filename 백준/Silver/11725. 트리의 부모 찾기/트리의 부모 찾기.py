import sys
sys.setrecursionlimit(10**6)
input = sys.stdin.readline

N = int(input())
graph = [[] for _ in range(N + 1)]

for _ in range(N - 1):
    a, b = map(int, input().split())
    graph[a].append(b)
    graph[b].append(a)

parents = [0] * (N + 1)

def dfs(node):
    for child in graph[node]:
        if parents[child] == 0:
            parents[child] = node
            dfs(child)
dfs(1)

print('\n'.join(map(str, parents[2:])))