def solution(n):
    answer = 0
    def backtrack(left, right):
        nonlocal answer
        if left == n and right == n:
            answer += 1
            return
        
        if left < n:
            backtrack(left + 1, right)
        
        if left > right:
            backtrack(left, right + 1)
        
    backtrack(0, 0)
    return answer