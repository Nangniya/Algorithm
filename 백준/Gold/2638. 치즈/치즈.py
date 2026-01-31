import sys
from collections import deque

input = sys.stdin.readline

def is_in_bounds(r, c, n, m):
    return 0 <= r < n and 0 <= c < m

def solution():
    n, m = map(int, input().split())
    grid = [list(map(int, input().split())) for _ in range(n)]

    dr = [-1, 1, 0, 0]
    dc = [0, 0, -1, 1]

    answer = 0

    while True:
        visited = [[False] * m for _ in range(n)]
        air_count = [[0] * m for _ in range(n)]

        queue = deque()
        queue.append((0, 0))
        visited[0][0] = True

        while queue:
            r, c = queue.popleft()

            for i in range(4):
                nr, nc = r + dr[i], c + dc[i]

                if is_in_bounds(nr, nc, n, m) and not visited[nr][nc]:

                    if grid[nr][nc] == 0:
                        visited[nr][nc] = True
                        queue.append((nr, nc))
                    elif grid[nr][nc] == 1:
                        air_count[nr][nc] += 1

        melted = False
        for r in range(n):
            for c in range(m):
                if air_count[r][c] >= 2:
                    grid[r][c] = 0
                    melted = True

        if not melted:
            break
        answer += 1

    print(answer)

solution()