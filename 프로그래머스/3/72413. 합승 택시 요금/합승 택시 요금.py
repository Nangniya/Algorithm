def solution(n, s, a, b, fares):
    dist = [[float('inf')] * (n + 1) for i in range(n + 1)]
    for i in range(1, n + 1):
        dist[i][i] = 0
    
    for start, end, w in fares:
        dist[start][end] = w
        dist[end][start] = w
    
    for k in range(1, n + 1):
        for i in range(1, n + 1):
            for j in range(1, n + 1):
                if dist[i][k] + dist[k][j] < dist[i][j]:
                    dist[i][j] = dist[i][k] + dist[k][j]
    
    answer = dist[s][a] + dist[s][b]
    
    for i in range(1, n + 1):
        cost = dist[s][i] + dist[i][a] + dist[i][b]
        answer = min(cost, answer)
        
    return answer
    