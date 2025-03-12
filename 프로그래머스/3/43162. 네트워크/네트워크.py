def solution(n, computers):
    parents = [i for i in range(n)]
    rank = [0] * n
    
    def find(i):
        if parents[i] == i:
            return i
        parents[i] = find(parents[i])
        return parents[i]
    
    def union(a, b):
        aroot, broot = find(a), find(b)
        if aroot != broot:
            if rank[aroot] < rank[broot]:
                parents[aroot] = broot
            elif rank[aroot] > rank[broot]:
                parents[broot] = aroot
            else:
                parents[broot] = aroot
                rank[aroot] += 1
    
    for i in range(n):
        for j in range(n):
            if i == j:
                continue
            if computers[i][j] == 1:
                union(i, j)
    
    answer = 0
    for i in range(n):
        if parents[i] == i:
            answer += 1
    return answer
