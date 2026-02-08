import sys

def solution():
    input_data = sys.stdin.read().splitlines()

    r_size, c_size, time_limit = map(int, input_data[0].split())
    board = [list(map(int, line.split())) for line in input_data[1:r_size+1]]

    ac = []
    for r in range(r_size):
        if board[r][0] == -1:
            ac.append(r)

    dr = [-1, 1, 0, 0]
    dc = [0, 0, -1, 1]

    def spread():
        add_board = [[0] * c_size for _ in range(r_size)]
        
        for r in range(r_size):
            for c in range(c_size):
                if board[r][c] > 0:
                    amount = board[r][c] // 5
                    count = 0
                    
                    for i in range(4):
                        nr, nc = r + dr[i], c + dc[i]
                        
                        if 0 <= nr < r_size and 0 <= nc < c_size and board[nr][nc] != -1:
                            add_board[nr][nc] += amount
                            count += 1
                    
                    board[r][c] -= amount * count
        
        for r in range(r_size):
            for c in range(c_size):
                board[r][c] += add_board[r][c]

    def clean():
        top = ac[0]
        bottom = ac[1]

        # 위쪽 공기청정기 (반시계 방향)
        # 아래로 당기기
        for i in range(top - 1, 0, -1):
            board[i][0] = board[i - 1][0]
        # 왼쪽으로 당기기
        for i in range(c_size - 1):
            board[0][i] = board[0][i + 1]
        # 위로 당기기
        for i in range(top):
            board[i][c_size - 1] = board[i + 1][c_size - 1]
        # 오른쪽으로 당기기
        for i in range(c_size - 1, 1, -1):
            board[top][i] = board[top][i - 1]
        board[top][1] = 0

        # 아래쪽 공기청정기 (시계 방향)
        # 위로 당기기
        for i in range(bottom + 1, r_size - 1):
            board[i][0] = board[i + 1][0]
        # 왼쪽으로 당기기
        for i in range(c_size - 1):
            board[r_size - 1][i] = board[r_size - 1][i + 1]
        # 아래로 당기기
        for i in range(r_size - 1, bottom, -1):
            board[i][c_size - 1] = board[i - 1][c_size - 1]
        # 오른쪽으로 당기기
        for i in range(c_size - 1, 1, -1):
            board[bottom][i] = board[bottom][i - 1]
        board[bottom][1] = 0

    for _ in range(time_limit):
        spread()
        clean()

    answer = 0
    for r in range(r_size):
        for c in range(c_size):
            if board[r][c] > 0:
                answer += board[r][c]
    
    return answer

print(solution())