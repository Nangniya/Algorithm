def solution(n, m, x, y, r, c, k):
    dist = abs(r - x) + abs(c - y)
    
    if dist > k or (k - dist) % 2 == 1:
        return 'impossible'
    
    directions = ['d', 'l', 'r', 'u']
    dx = [1, 0, 0, -1]
    dy = [0, -1, 1, 0]
    
    answer = []
    while k > 0:
        for i in range(4): # 방향 순서대로 유효하면서 거리도 되면 이동
            nx, ny = x + dx[i], y + dy[i]
            if nx > 0 and nx <= n and ny > 0 and ny <= m:
                remaining_dist = abs(r - nx) + abs(c - ny)
                if remaining_dist <= k - 1:
                    answer.append(directions[i])
                    x, y = nx, ny
                    k -= 1
                    break
    
    return "".join(answer)
    