import sys

input_data = [list(map(int, line.split())) for line in sys.stdin]
n, m = input_data[0]
r, c, d = input_data[1]
room = input_data[2:]

# 북, 동, 남, 서
dr = [-1, 0, 1, 0]
dc = [0, 1, 0, -1]

cleaned = [[False] * m for _ in range(n)]
answer = 0

while True:
    if not cleaned[r][c]:
        cleaned[r][c] = True
        answer += 1
    
    is_dirty_exist = False
    for _ in range(4):
        d = (d - 1) % 4
        nr, nc = r + dr[d], c + dc[d]
        if 0 <= nr < n and 0 <= nc < m and room[nr][nc] == 0 and not cleaned[nr][nc]:
            r, c = nr, nc
            is_dirty_exist = True
            break
    
    if not is_dirty_exist:
        br, bc = r - dr[d], c - dc[d]
        if br < 0 or br >= n or bc < 0 or bc >= m or room[br][bc] == 1:
            break
        r, c = br, bc
    
print(answer)
