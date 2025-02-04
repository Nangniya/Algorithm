import sys
input = sys.stdin.readline

board = [list(map(int, input().split())) for _ in range(9)]

# 각 행, 열, 박스에 있는 숫자를 미리 체크
row = [[False] * 10 for _ in range(9)]
col = [[False] * 10 for _ in range(9)]
box = [[False] * 10 for _ in range(9)]

# 초기 보드 상태 저장
for i in range(9):
    for j in range(9):
        if board[i][j]:
            num = board[i][j]
            row[i][num] = True
            col[j][num] = True
            box[(i//3)*3 + j//3][num] = True

def isValid(num, r, c):
    return not (row[r][num] or col[c][num] or box[(r//3)*3 + c//3][num])

def backtrack(idx):
    if idx == 81:
        return True
        
    r, c = idx // 9, idx % 9
    if board[r][c]:
        return backtrack(idx + 1)
        
    for num in range(1, 10):
        if isValid(num, r, c):
            board[r][c] = num
            row[r][num] = col[c][num] = box[(r//3)*3 + c//3][num] = True
            if backtrack(idx + 1):
                return True
            board[r][c] = 0
            row[r][num] = col[c][num] = box[(r//3)*3 + c//3][num] = False
            
    return False

backtrack(0)
print('\n'.join(' '.join(map(str, row)) for row in board))