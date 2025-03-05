def solution(n, k, cmd):
    deleted_stack = []
    up = [i - 1 for i in range(n + 2)]
    down = [i + 1 for i in range(n + 1)]
    k += 1
    
    for cmd_i in cmd:
        if cmd_i == 'C':
            deleted_stack.append(k)
            up[down[k]] = up[k]
            down[up[k]] = down[k]
            k = up[k] if down[k] > n else down[k]
        elif cmd_i == 'Z':
            restore = deleted_stack.pop()
            up[down[restore]] = restore
            down[up[restore]] = restore
        else:
            direction, num = cmd_i.split()
            if direction == 'U':
                for _ in range(int(num)):
                    k = up[k]
            elif direction == 'D':
                for _ in range(int(num)):
                    k = down[k]
        
    answer = ['O'] * n
    for i in deleted_stack:
        answer[i - 1] = 'X'
    
    return "".join(answer)