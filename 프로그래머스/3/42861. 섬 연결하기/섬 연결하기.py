def solution(n, costs):
    parent = [i for i in range(n)]
    rank = [0] * n
    
    def find(i):
        if parent[i] == i:
            return i
        parent[i] = find(parent[i])
        return parent[i]
    
    def union(a, b):
        aroot = find(a)
        broot = find(b)
        
        if rank[aroot] < rank[broot]:
            parent[aroot] = broot
        elif rank[broot] < rank[aroot]:
            parent[broot] = aroot
        else:
            parent[broot] = aroot
            rank[aroot] += 1
    
    costs.sort(key=lambda x: x[2])
    min_cost = 0
    edges = 0
    
    for start, end, cost in costs:
        if edges == n - 1:
            break
        a, b = find(start), find(end)
        if a != b:
            union(a, b)
            min_cost += cost
            edges += 1
    
    return min_cost