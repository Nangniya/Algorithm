from collections import deque

def is_movable(r, c, n):
    return 0 <= r < n and 0 <= c < n

def get_blocks(board, target):
    n = len(board)
    visited = [[False] * n for _ in range(n)]
    blocks = []
    
    dr = [-1, 1, 0, 0]
    dc = [0, 0, -1, 1]
    
    for r in range(n):
        for c in range(n):
            if board[r][c] == target and not visited[r][c]:
                block = []
                queue = deque([[r, c]])
                visited[r][c] = True
                
                while queue:
                    curr_r, curr_c = queue.popleft()
                    block.append([curr_r, curr_c])
                    
                    for i in range(4):
                        nr, nc = curr_r + dr[i], curr_c + dc[i]
                        
                        if is_movable(nr, nc, n) and not visited[nr][nc] and board[nr][nc] == target:
                            visited[nr][nc] = True
                            queue.append([nr, nc])
                
                blocks.append(block)
    return blocks

def normalize(block):
    # 최소 r과 최소 c 찾기
    min_r = min(r for r, c in block)
    min_c = min(c for r, c in block)
    
    # (0, 0) 기준으로 이동 후 정렬
    normalized = sorted([[r - min_r, c - min_c] for r, c in block])
    return normalized

def rotate(block):
    # (r, c) -> (c, -r) 90도 회전
    rotated = [[c, -r] for r, c in block]
    return normalize(rotated)

def solution(game_board, table): 
    blanks = [normalize(b) for b in get_blocks(game_board, 0)]
    puzzles = [normalize(p) for p in get_blocks(table, 1)]
    
    puzzle_used = [False] * len(puzzles)
    
    answer = 0
    
    for blank in blanks:
        found = False
        for i in range(len(puzzles)):
            if puzzle_used[i]:
                continue
            if len(blank) != len(puzzles[i]):
                continue
                
            current_puzzle = puzzles[i]
            
            # 0, 90, 180, 270도 회전하며 대조
            for _ in range(4):
                if blank == current_puzzle: # 파이썬은 리스트끼리 == 비교 가능!
                    answer += len(blank)
                    puzzle_used[i] = True
                    found = True
                    break
                current_puzzle = rotate(current_puzzle)
            
            if found:
                break
                
    return answer
