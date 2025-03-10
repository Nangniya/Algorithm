import math

def solution(enroll, referral, seller, amount):
    ref = {}
    result = {}
    for i in range(len(enroll)):
        ref[enroll[i]] = referral[i]
        result[enroll[i]] = 0
    
    for i in range(len(seller)):
        p, cash = seller[i], amount[i] * 100
        while p != '-' and cash > 0:
            p_cash = math.ceil(cash * 0.9)
            result[p] += p_cash
            cash -= p_cash
            p = ref[p]
    
    answer = []
    for p in enroll:
        answer.append(result[p])
    return answer