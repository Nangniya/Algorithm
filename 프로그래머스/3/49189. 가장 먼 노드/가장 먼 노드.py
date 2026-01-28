from collections import deque

def solution(n, vertex):
    graph = [[] for _ in range(n + 1)]
    for start, end in vertex:
        graph[start].append(end)
        graph[end].append(start)
    
    distances = [-1] * (n + 1)
    distances[1] = 0
    
    queue = deque([[1, 0]]) # [노드, 거리]
    
    while queue:
        node, dist = queue.popleft()
        
        for neighbor in graph[node]:
            # 방문하지 않은 노드들만 탐색
            if distances[neighbor] == -1:
                # 다음 노드의 거리는 현재 노드 거리 + 1
                distances[neighbor] = dist + 1
                queue.append([neighbor, distances[neighbor]])
    
    max_dist = max(distances)
    return distances.count(max_dist)