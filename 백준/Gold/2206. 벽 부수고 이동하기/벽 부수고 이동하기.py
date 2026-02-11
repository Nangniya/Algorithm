import sys
from collections import deque

input_data = sys.stdin.read().split()

[N, M] = [int(input_data[0]), int(input_data[1])]
board = []

idx = 2
for _ in range(N):
    board.append(list(map(int, list(input_data[idx]))))
    idx += 1

# visited[r][c][0]: 벽 안 부숨, [1]: 벽 부숨
visited = [[[False] * 2 for _ in range(M)] for _ in range(N)]
q = deque([(0, 0, 1, 0)]) # r, c, dist, broken
visited[0][0][0] = True

dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0]
answer = -1

while q:
    y, x, dist, broken = q.popleft()

    if y == N - 1 and x == M - 1:
        answer = dist
        break

    for i in range(4):
        ny, nx = y + dy[i], x + dx[i]

        if 0 <= ny < N and 0 <= nx < M:
            # 벽을 만났을 때
            if board[ny][nx] == 1 and broken == 0:
                if not visited[ny][nx][1]:
                    visited[ny][nx][1] = True
                    q.append((ny, nx, dist + 1, 1))
            
            # 빈 공간일 때
            elif board[ny][nx] == 0:
                if not visited[ny][nx][broken]:
                    visited[ny][nx][broken] = True
                    q.append((ny, nx, dist + 1, broken))

print(answer)