def solution(arr):
    n = len(arr)
    answer = [0, 0] # [0 개수, 1 개수]
    def dfs(size, r, c):
        first = arr[r][c]
        
        if size == 1:
            answer[first] += 1
            return
        
        is_uniform = True
        for i in range(r, r + size):
            for j in range(c, c + size):
                if arr[i][j] != first:
                    is_uniform = False
                    break
            if not is_uniform:
                break
        
        if is_uniform:
            answer[first] += 1
        else:
            half = size // 2
            dfs(half, r, c)
            dfs(half, r + half, c)
            dfs(half, r, c + half)
            dfs(half, r + half, c + half)
    
    dfs(n, 0, 0)
    return answer