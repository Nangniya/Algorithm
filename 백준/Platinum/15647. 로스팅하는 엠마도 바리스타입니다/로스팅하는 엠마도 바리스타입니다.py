import sys

sys.setrecursionlimit(10**6)
input = sys.stdin.readline

def solve():
    n = int(input())

    adj = [[] for _ in range(n + 1)] # 출발지: (도착지, 거리)
    for _ in range(n - 1):
        u, v, d = map(int, input().split())
        adj[u].append((v, d))
        adj[v].append((u, d))

    subtree_size = [0] * (n + 1)
    dist_sum = [0] * (n + 1)
    
    total_dist = [0] * (n + 1)

    # 1단계: 1번 노드를 루트로 하여 서브트리 크기와 1번 기준 거리 합 구하기
    def get_subtree_info(cur, prev):
        subtree_size[cur] = 1
        for neighbor, w in adj[cur]:
            if neighbor != prev:
                get_subtree_info(neighbor, cur)
                subtree_size[cur] += subtree_size[neighbor]
                # 1번 노드로부터 각 노드까지의 거리 합 누적
                dist_sum[cur] += dist_sum[neighbor] + (subtree_size[neighbor] * w)
    
    # 2단계: 부모의 값을 이용해 자식 노드의 전체 거리 합 유도하기 (Rerooting)
    def calculate_all_distances(cur, prev):
        for neighbor, w in adj[cur]:
            if neighbor != prev:
                # 공식: 부모 거리합 - (가까워지는 노드들) + (멀어지는 노드들)
                # 가까워지는 노드 수 = subtree_size[neighbor]
                # 멀어지는 노드 수 = n - subtree_size[neighbor]
                total_dist[neighbor] = total_dist[cur] - (subtree_size[neighbor] * w) + ((n - subtree_size[neighbor]) * w)
                calculate_all_distances(neighbor, cur)
    
    get_subtree_info(1, -1)
    total_dist[1] = dist_sum[1]
    calculate_all_distances(1, -1)

    print('\n'.join(map(str, total_dist[1:])))

if __name__ == "__main__":
    solve()