def solution(money):
    n = len(money)
    dp1 = [0] * n # 첫 번째 털기
    dp2 = [0] * n # 첫 번째 안털기
    
    dp1[0] = dp1[1] = money[0]
    dp2[1] = money[1]
    
    for i in range(2, n - 1): # 첫 번째 털기 = 마지막 안 털기
        dp1[i] = max(dp1[i - 1], dp1[i - 2] + money[i])
    for i in range(2, n): # 첫 번쨰 안 털기 = 마지막 털기
        dp2[i] = max(dp2[i - 1], dp2[i - 2] + money[i])
        
    return max(dp1[-2], dp2[-1])