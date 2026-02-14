import sys
sys.setrecursionlimit(20000) # 재귀 한도 초과 방지

def solution(k, num, links):
    n = len(num)
    parent = [-1] * n
    for i, (l, r) in enumerate(links):
        if l != -1: parent[l] = i
        if r != -1: parent[r] = i
    
    root = -1
    for i in range(n):
        if parent[i] == -1:
            root = i
            break
    
    def check(limit):
        cnt = 0 # 끊은 간선의 수
        
        def dfs(node):
            nonlocal cnt
            if node == -1: # 자식이 없을 경우 return
                return 0
            
            [left, right] = [dfs(links[node][0]), dfs(links[node][1])]
            
            # 1. 자신 + 양쪽 자식 합이 제한 내인 경우
            if num[node] + left + right <= limit:
                return num[node] + left + right
            
            # 2. 자신 + 작은 쪽 자식 합이 제한 내인 경우 -> 큰 쪽 하나 끊음
            if num[node] + min(left, right) <= limit:
                cnt += 1
                return num[node] + min(left, right)
            
            # 3. 자신만 겨우 제한 내인 경우 -> 양쪽 다 끊음
            cnt += 2
            return num[node]
        
        dfs(root)
        return cnt + 1 <= k # 끊은 간선의 수 + 1이 그룹의 수

    # 이분 탐색 (Parametric Search)
    [low, high] = [max(num), sum(num)]
    answer = high
    
    while low <= high:
        mid = (low + high) // 2
        if check(mid):
            answer = mid
            high = mid - 1
        else:
            low = mid + 1
            
    return answer