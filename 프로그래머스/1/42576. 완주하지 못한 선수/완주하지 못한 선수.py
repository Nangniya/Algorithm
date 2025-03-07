def solution(participant, completion):
    dict = { }
    for cp in completion:
        if cp in dict:
            dict[cp] += 1
        else:
            dict[cp] = 1
    
    for p in participant:
        if p in dict:
            if dict[p] == 1:
                del dict[p]
            else:
                dict[p] -= 1
        else:
             return p   