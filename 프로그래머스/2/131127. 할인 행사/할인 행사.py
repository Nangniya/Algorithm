def solution(want, number, discount):
    want_dic = {}
    for i in range(len(want)):
        want_dic[want[i]] = number[i]
        
    answer = 0
    local_dic = {}
    for i in range(10):
        if discount[i] in local_dic:
            local_dic[discount[i]] += 1
        else:
            local_dic[discount[i]] = 1
    for key in local_dic.keys():
        if not key in want_dic or want_dic[key] != local_dic[key]:
            break
    else:
        answer += 1
        
    for i in range(10, len(discount)):
        plus = discount[i]
        minus = discount[i - 10]
        
        if plus in local_dic:
            local_dic[plus] += 1
        else:
            local_dic[plus] = 1
            
        if local_dic[minus] == 1:
            del local_dic[minus]
        else:
            local_dic[minus] -= 1
                
        for key in local_dic.keys():
            if key not in want_dic or want_dic[key] != local_dic[key]:
                break
        else:
            answer += 1
        
    return answer
            