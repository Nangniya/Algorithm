def is_valid_move(nx, ny):
    return 0 <= nx < 11 and 0 <= ny < 11

def move(x, y, dir):
    if dir == 'U':
        return x, y + 1
    elif dir == 'D':
        return x, y -1
    elif dir == 'R':
        return x + 1, y
    elif dir == 'L':
        return x - 1, y

def solution(dirs):
    passed = set()
    x, y = 5, 5
    for dir in dirs:
        nx, ny = move(x, y, dir)
        if not is_valid_move(nx, ny):
            continue
        passed.add((x, y, nx, ny))
        passed.add((nx, ny, x, y))
        x, y = nx, ny
    return len(passed) / 2
    