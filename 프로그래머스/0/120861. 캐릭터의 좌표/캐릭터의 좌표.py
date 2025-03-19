def move(order, x, y):
    if order == 'left':
        return x - 1, y
    if order == 'right':
        return x + 1, y
    if order == 'up':
        return x, y + 1
    if order == 'down':
        return x, y - 1

def solution(keyinput, board):
    x_left, x_right = -(board[0] - 1) // 2, (board[0] - 1) // 2
    y_down, y_up = -(board[1] - 1) // 2, (board[1] - 1) // 2
    def is_valid_move(x, y):
        return x_left <= x <= x_right and y_down <= y <= y_up
    
    X, Y = 0, 0
    for order in keyinput:
        nx, ny = move(order, X, Y)
        if is_valid_move(nx, ny):
            X = nx
            Y = ny
    return [X, Y]