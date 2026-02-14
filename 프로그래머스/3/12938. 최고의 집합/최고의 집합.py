def solution(n, s):
    if n > s:
        return [-1]
    
    q, r = divmod(s, n)
    answer = [q] * n
    
    # 나머지(r)만큼의 개수만큼 뒤에서부터 1씩 더해주면 자연스럽게 오름차순이 유지됨
    for i in range(r):
        answer[n - 1 - i] += 1
        
    return answer