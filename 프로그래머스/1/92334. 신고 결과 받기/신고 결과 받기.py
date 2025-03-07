def solution(id_list, report, k):
    reporting = {}
    reported = {}
    for id in id_list:
        reporting[id] = set()
        reported[id] = 0
    for cmd in report:
        o, d = cmd.split(' ')
        if not d in reporting[o]:
            reporting[o].add(d)
            reported[d] += 1
            
    answer = []
    for id in id_list:
        count = 0
        report_set = reporting[id]
        for d in report_set:
            if reported[d] >= k:
                count += 1
        answer.append(count)
    
    return answer