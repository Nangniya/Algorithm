def solution(record):
    id_dict = {}
    answer = []
    for s in record:
        parts = s.split()
        if parts[0] in ['Enter', 'Change']:
            id_dict[parts[1]] = parts[2]
    
    for s in record:
        parts = s.split()
        if parts[0] == 'Enter':
            answer.append(f"{id_dict[parts[1]]}님이 들어왔습니다.")
        elif parts[0] == 'Leave':
            answer.append(f"{id_dict[parts[1]]}님이 나갔습니다.")
    
    return answer