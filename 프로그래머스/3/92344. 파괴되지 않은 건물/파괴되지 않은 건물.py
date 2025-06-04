def solution(board, skill):
    N, M = len(board), len(board[0])
    dp = [[0] * M for _ in range(N)]
    answer = 0
    
    for t, r1, c1, r2, c2, degree in skill:
        d = -degree if t == 1 else degree
        dp[r1][c1] += d
        if r2 + 1 < N:
            dp[r2 + 1][c1] -= d
        if c2 + 1 < M:
            dp[r1][c2 + 1] -= d
        if r2 + 1 < N and c2 + 1 < M:
            dp[r2 + 1][c2 + 1] += d
    
    for i in range(N): 
        for j in range(M):
            top = dp[i - 1][j] if i > 0 else 0
            left = dp[i][j - 1] if j > 0 else 0
            intersection = dp[i - 1][j - 1] if i > 0 and j > 0 else 0
            dp[i][j] += top + left - intersection 
            
            if dp[i][j] + board[i][j] > 0:
                answer += 1
    
    return answer
            