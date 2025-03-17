def solution(n):
    answer = 0
    line = [False] * n # 
    diagonal1 = [False] * 2 * n # 우상향 대각선
    diagonal2 = [False] * 2 * n # 우하향 대각선
    
    def backtrack(y):
        nonlocal answer
        if y == n:
            answer += 1
            return
        for i in range(n):
            if line[i] or diagonal1[i + y] or diagonal2[i + (n - y)]:
                continue
            line[i] = diagonal1[i + y] = diagonal2[i + (n - y)] = True
            backtrack(y + 1)
            line[i] = diagonal1[i + y] = diagonal2[i + (n - y)] = False
    
    backtrack(0)    
    return answer