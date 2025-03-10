from collections import deque

def solution(maps):
    n, m = len(maps), len(maps[0])
    visited = [[[False for _ in range(2)] for _ in range(m)] for _ in range(n)]
    
    def is_valid_move(r, c):
        return 0 <= r < n and 0 <= c < m and maps[r][c] != 'X'
    
    dy = [0, -1, 0, 1]
    dx = [1, 0, -1, 0]
    
    q = deque()
    end = [-1, -1]
    for i in range(n):
        for j in range(m):
            if maps[i][j] == 'S':
                q.append([i, j, 0, 0]) # [행, 열, 레버 당김 여부(0, 1), 이동횟수]
                visited[i][j][0] = True
            elif maps[i][j] == 'E':
                end = [i, j]
    
    while len(q) > 0:
        row, col, is_opened, num = q.popleft()
        if row == end[0] and col == end[1] and is_opened:
            return num
        
        for i in range(4):
            ny, nx = dy[i] + row, dx[i] + col
            if is_valid_move(ny, nx):
                is_l = maps[ny][nx] == 'L'
                if not visited[ny][nx][1 if is_l else is_opened]:
                    visited[ny][nx][1 if is_l else is_opened] = True
                    q.append([ny, nx, 1 if is_l else is_opened, num + 1])
    return -1
    