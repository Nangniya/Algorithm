import sys

# 재귀 깊이 제한 해제
sys.setrecursionlimit(300000)

def solution(sales, links):
    team = {}
    for parent, child in links:
        if parent not in team:
            team[parent] = []
        team[parent].append(child)
    
    # dp[노드][0]: 불참, dp[노드][1]: 참석
    n = len(sales)
    dp = [[0, 0] for _ in range(n + 1)]
    
    def dfs(curr):
        dp[curr][0] = 0
        dp[curr][1] = sales[curr - 1]
        
        # 자식(팀원)이 없는 리프 노드인 경우 종료
        if curr not in team:
            return
        
        total_sum = 0
        is_any_member_attending = False
        min_diff = float('inf')
        
        for member in team[curr]:
            dfs(member) # 자식부터 계산 (Bottom-up)
            
            # 자식 노드에서 [안 갈 때, 갈 때] 중 더 저렴한 것 선택
            if dp[member][0] < dp[member][1]:
                total_sum += dp[member][0]
                # 강제 동원을 대비한 최소 비용 차이 저장
                min_diff = min(min_diff, dp[member][1] - dp[member][0])
            else:
                total_sum += dp[member][1]
                is_any_member_attending = True
                
        # 팀장이 참석하면 팀원들은 최적의 선택(가든 말든)을 합산한 total_sum만 더해주면 됨
        dp[curr][1] += total_sum
        # 팀장이 참석 안 할 때: 한 명이라도 이미 참석 중이면 그대로, 아니면 min_diff를 더함
        dp[curr][0] = total_sum if is_any_member_attending else total_sum + min_diff

    dfs(1)
    return min(dp[1][0], dp[1][1])
