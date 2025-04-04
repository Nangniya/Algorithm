def solution(cap, n, deliveries, pickups):
    answer = 0
    d, p = 0, 0
    for i in range(n - 1, -1, -1):
        d += deliveries[i]
        p += pickups[i]
        
        while d > 0 or p > 0: # 용량을 초과한다면 방문해야해서 answer에 추가 
            d -= cap
            p -= cap
            answer += (i + 1) * 2
        
    return answer