import heapq

def solution(N, road, K):
    graph = [[] for _ in range(N)]
    for start, end, w in road:
        graph[start - 1].append((end - 1, w))
        graph[end - 1].append((start - 1, w))
        
    dists = [float('inf')] * N
    visited = [False] * N
    
    dists[0] = 0
    pq = [(0, 0)]  # (거리, 노드)
    
    while pq:
        cur_w, cur_node = heapq.heappop(pq)
        
        if visited[cur_node]:
            continue
            
        visited[cur_node] = True
        
        for next_node, w in graph[cur_node]:
            new_dist = dists[cur_node] + w
            if new_dist < dists[next_node]:
                dists[next_node] = new_dist
                heapq.heappush(pq, (new_dist, next_node))
        
    answer = sum(1 for d in dists if d <= K)
    return answer