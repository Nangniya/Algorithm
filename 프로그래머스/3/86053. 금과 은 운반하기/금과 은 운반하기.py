def solution(a, b, g, s, w, t):
    [low, high] = [0, 10**15]
    answer = high
    
    while low <= high:
        mid = (low + high) // 2
        if chech(mid, a, b, g, s, w, t):
            answer = mid
            high = mid - 1
        else:
            low = mid + 1
    
    return answer

def chech(time, a, b, g, s, w, t):
    [total_g, total_s, total_total] = [0] * 3
    
    for i in range(len(g)):
        round_time = 2 * t[i]
        max_count = (time + t[i]) // round_time
        max_weight = max_count * w[i]
        
        total_g += min(g[i], max_weight)
        total_s += min(s[i], max_weight)
        total_total += min(g[i] + s[i], max_weight)
    
    return total_g >= a and total_s >= b and total_total >= (a + b)