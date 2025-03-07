from itertools import combinations

def solution(orders, course):
    combis = {} # 메뉴 조합 : 주문 개수
    for num in course:
        combis[num] = {}
    for s in orders:
        menus = list(s)
        for num in course:
            candidates = list(combinations(menus, num))
            for menu in candidates:
                key = ''.join(sorted(menu))
                combis[num][key] = combis[num].get(key, 0) + 1
    
    answer = []
    for num in course:
        sorted_dict = sorted(combis[num].items(), key=lambda x: x[1], reverse=True)
        if sorted_dict and sorted_dict[0][1] >= 2:
            max_count = sorted_dict[0][1]
            answer.extend([key for key, count in sorted_dict if count == max_count]) 
    
    return sorted(answer)