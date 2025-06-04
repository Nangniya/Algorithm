def solution(alp, cop, problems):
    maxAlp, maxCop = 0, 0
    for alp_req, cop_req, alp_rwd, cop_rwd, cost in problems:
        maxAlp = max(maxAlp, alp_req)
        maxCop = max(maxCop, cop_req)
    alp, cop = min(alp, maxAlp), min(cop, maxCop)
    
    dp = [[float('inf')] * (maxCop + 1) for _ in range(maxAlp + 1)]
    dp[alp][cop] = 0
    
    for i in range(alp, maxAlp + 1):
        for j in range(cop, maxCop + 1):
            if i < maxAlp:
                dp[i + 1][j] = min(dp[i + 1][j], dp[i][j] + 1)
            if j < maxCop:
                dp[i][j + 1] = min(dp[i][j + 1], dp[i][j] + 1)
            
            for alp_req, cop_req, alp_rwd, cop_rwd, cost in problems:
                if i >= alp_req and j >= cop_req:
                    new_i, new_j = min(i + alp_rwd, maxAlp), min(j + cop_rwd, maxCop)
                    dp[new_i][new_j] = min(dp[new_i][new_j], dp[i][j] + cost)
    
    return dp[maxAlp][maxCop]
    
    