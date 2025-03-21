def solution(n, stations, w):
    answer = 0
    cur_loc = 1
    idx = 0
    
    while cur_loc <= n:
        if idx < len(stations) and cur_loc >= stations[idx] - w:
            cur_loc = stations[idx] + w + 1
            idx += 1
        else:
            cur_loc += 2 * w + 1
            answer += 1
            
    return answer
            