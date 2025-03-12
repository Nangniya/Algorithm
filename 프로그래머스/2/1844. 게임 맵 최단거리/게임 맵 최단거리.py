from collections import deque

move = [[1, 0], [0, -1], [-1, 0], [0, 1]]

def solution(maps):
    n, m = len(maps), len(maps[0])
    def is_valid_move(row, col):
        return 0 <= row < n and 0 <= col < m and maps[row][col] == 1
    visited = [[False] * m for _ in range(n)]
    q = deque() 
    q.append([0, 0, 1]) # [행, 열, 이동 횟수]
    visited[0][0] = True
    
    while q:
        y, x, count = q.popleft()
        if y == n - 1 and x == m - 1:
            return count
        
        for dy, dx in move:
            ny, nx = y + dy, x + dx
            if not is_valid_move(ny, nx):
                continue
                
            if not visited[ny][nx]:
                visited[ny][nx] = True
                q.append([ny, nx, count + 1])
    
    return -1