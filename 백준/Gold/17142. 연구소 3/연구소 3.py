import sys
from collections import deque
from itertools import combinations

def solution():
    input = sys.stdin.read().splitlines()
    if not input:
        return
    
    n, m = map(int, input[0].split())
    board = [list(map(int, line.split())) for line in input[1:n+1]]

    dr = [-1, 1, 0, 0]
    dc = [0, 0, -1, 1]

    viruses = []
    total_empty = 0

    for r in range(n):
        for c in range(n):
            if board[r][c] == 2:
                viruses.append((r, c))
            elif board[r][c] == 0:
                total_empty += 1

    if total_empty == 0:
        return 0

    virus_combinations = list(combinations(viruses, m))
    answer = float('inf')

    for combi in virus_combinations:
        visited = [[False] * n for _ in range(n)]
        queue = deque()
        
        infected_empty = 0
        local_max_time = 0

        for vr, vc in combi:
            visited[vr][vc] = True
            queue.append((vr, vc, 0))

        while queue:
            r, c, time = queue.popleft()

            for i in range(4):
                nr, nc = r + dr[i], c + dc[i]

                if 0 <= nr < n and 0 <= nc < n:
                    if not visited[nr][nc] and board[nr][nc] != 1:
                        visited[nr][nc] = True
                        
                        if board[nr][nc] == 0:
                            infected_empty += 1
                            local_max_time = time + 1
                        
                        queue.append((nr, nc, time + 1))
        
        if infected_empty == total_empty:
            answer = min(answer, local_max_time)

    return answer if answer != float('inf') else -1

print(solution())