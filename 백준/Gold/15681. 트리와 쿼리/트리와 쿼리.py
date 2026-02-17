import sys

sys.setrecursionlimit(10**6)
input = sys.stdin.readline

def solve():
    n, r, q = map(int, input().split())

    adj = [[] for _ in range(n + 1)]
    for _ in range(n - 1):
        u, v = map(int, input().split())
        adj[u].append(v)
        adj[v].append(u)
    
    size = [0] * (n + 1)

    def count_subtree_nodes(cur, parent):
        size[cur] = 1

        for neighbor in adj[cur]:
            if neighbor != parent:
                count_subtree_nodes(neighbor, cur)
                size[cur] += size[neighbor]
    
    count_subtree_nodes(r, -1)

    for _ in range(q):
        u = int(input())
        print(size[u])

if __name__ == "__main__":
    solve()