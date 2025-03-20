def solution(strs, t):
    n = len(t)
    dp = [float('inf')] * (n + 1)
    dp[0] = 0
    sizes = set(len(s) for s in strs)
    for i in range(1, n + 1):
        for size in sizes:
            if i - size >= 0 and t[i - size : i] in strs:
                dp[i] = min(dp[i - size] + 1, dp[i])
    return dp[n] if dp[n] != float('inf') else -1