from heapq import heappush, heappop

def solution(land, height):
    answer = 0
    n = len(land)
    dx, dy = [-1, 0, 1, 0], [0, 1, 0, -1]
    
    visited = [[False] * n for _ in range(n)]
    q = []
    
    heappush(q, [0, 0, 0]) # [비용, y, x]
    
    while q:
        cost, y, x = heappop(q)
        
        if not visited[y][x]:
            visited[y][x] = True
            answer += cost
            
            for i in range(4):
                ny, nx = y + dy[i], x + dx[i]
                if 0 <= ny < n and 0 <= nx < n:
                    temp_cost = abs(land[y][x] - land[ny][nx])
                    if temp_cost > height:
                        new_cost = temp_cost
                    else: 
                        new_cost = 0
                    heappush(q, [new_cost, ny, nx])
    
    return answer