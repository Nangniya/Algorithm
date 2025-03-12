def solution(n, wires):
    min_diff = float('inf')
    
    for i in range(len(wires)):
        graph = [[] for _ in range(n)]
        start1, start2 = -1, -1
        for j, (start, end) in enumerate(wires):
            if i != j:
                graph[start - 1].append(end - 1)
                graph[end - 1].append(start - 1)
            else:
                start1, start2 = start - 1, end - 1
        visited = [False] * n
        
        def dfs(node):
            visited[node] = True
            count = 1
            for neighbor in graph[node]:
                if not visited[neighbor]:
                    count += dfs(neighbor)
            return count
        
        diff = abs(dfs(start1) - dfs(start2))
        min_diff = min(diff, min_diff)
        
    return min_diff