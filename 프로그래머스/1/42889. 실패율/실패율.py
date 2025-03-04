def solution(N, stages):
    passed_dp = [0] * (N + 1)
    challenging = [0] * (N + 1)
    ratios = [0] * (N + 1)
    
    for level in stages:
        if level != N + 1:
            challenging[level] += 1
            passed_dp[level] += 1
        else:
            passed_dp[level - 1] += 1
            
    for i in range(N - 1, 0, -1):
        passed_dp[i] += passed_dp[i + 1]
        
    for i in range(1, N + 1):
        if passed_dp[i] == 0:
            ratios[i] = 0
        else:
            ratios[i] = challenging[i] / passed_dp[i]
        
    result = sorted(range(1, N + 1), key=lambda x: -ratios[x])    
    return result