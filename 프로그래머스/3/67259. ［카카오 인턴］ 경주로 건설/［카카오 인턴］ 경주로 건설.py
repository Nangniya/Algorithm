from collections import deque

def solution(board):
    N = len(board)
    move = [(-1, 0), (0, -1), (1, 0), (0, 1)] # 상, 좌, 하, 우
    visited = [[[0 for _ in range(4)] for _ in range(N)] for _ in range(N)]
    q = deque([(0, 0, -1, 0)]) # (행, 열, 이전 방향, 비용)
    answer = float('inf')
    
    def is_valid_move(row, col):
        return 0 <= row < N and 0 <= col < N and board[row][col] == 0
    
    def get_cost(d, prev_d, cost):
        if prev_d == -1 or (prev_d - d) % 2 == 0:
            return cost + 100
        else:
            return cost + 600
        
    def is_can_be_updated(y, x, d, new_cost):
        return visited[y][x][d] == 0 or visited[y][x][d] > new_cost
    
    while q:
        y, x, prev_d, cost = q.popleft()
        
        for d, (dy, dx) in enumerate(move):
            ny, nx = y + dy, x + dx
            if not is_valid_move(ny, nx):
                continue
            new_cost = get_cost(d, prev_d, cost)
            
            if (ny, nx) == (N - 1, N - 1):
                answer = min(answer, new_cost)
            elif is_can_be_updated(ny, nx, d, new_cost):
                q.append((ny, nx, d, new_cost))
                visited[ny][nx][d] = new_cost
    
    return answer
    