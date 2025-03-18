def solution(s):
    arr = sorted(s[2:-2].split('},{'), key=lambda x: len(x))
    answer = []
    t_set = set()
    for t in arr:
        part = t.split(',')
        for c in part:
            if int(c) not in t_set:
                t_set.add(int(c))
                answer.append(int(c))
    return answer    
    