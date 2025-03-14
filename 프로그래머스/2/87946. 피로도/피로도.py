def solution(k, dungeons):
    visited = [False] * len(dungeons)
    
    def backtrack(cur_k, cnt):
        answer = cnt
        
        for i in range(len(dungeons)):
            k_req, cost = dungeons[i]
            if cur_k >= k_req and not visited[i]:
                visited[i] = True
                answer = max(answer, backtrack(cur_k - cost, cnt + 1))
                visited[i] = False
        
        return answer
    
    return backtrack(k, 0)