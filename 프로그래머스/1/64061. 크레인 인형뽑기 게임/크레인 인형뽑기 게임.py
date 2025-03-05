def solution(board, moves):
    n = len(board)
    answer = 0
    stack = []
    for c in moves:
        for row in board:
            if row[c - 1] != 0:
                if stack and stack[len(stack) - 1] == row[c - 1]:
                    stack.pop()
                    answer += 2
                else:
                    stack.append(row[c - 1])
                row[c - 1] = 0
                break
    print(board)
    return answer