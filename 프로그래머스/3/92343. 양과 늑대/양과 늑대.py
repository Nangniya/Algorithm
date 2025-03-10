from collections import deque

def solution(info, edges):
    tree = [[] for _ in range(len(info))]
    for edge in edges:
        tree[edge[0]].append(edge[1])
    visited = [False] * len(info)
    q = deque()
    
    q.append([0, 1, 0, set()]) # [현재 노드, 양, 늑대, 방문 집합]
    visited[0] = True
    max_sheep = 0
    
    while q:
        cur, sheep, wolf, visited = q.popleft()
        max_sheep = max(max_sheep, sheep)
        visited.update(tree[cur])
        
        for next_node in visited:
            if info[next_node]: # 늑대일 경우
                if sheep != wolf + 1:
                    q.append([next_node, sheep, wolf + 1, visited - {next_node}])
            else: # 양일 경우
                q.append([next_node, sheep + 1, wolf, visited - {next_node}])
    
    return max_sheep
                    