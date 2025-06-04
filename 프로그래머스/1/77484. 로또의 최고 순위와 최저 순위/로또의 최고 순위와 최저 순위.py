def solution(lottos, win_nums):
    fixed = 0
    zero = 0
    for n in lottos:
        if n in win_nums:
            fixed += 1
            win_nums.remove(n)
        if n == 0:
            zero += 1
            
    def get_rank(n):
        if n == 6:
            return 1
        if n == 5:
            return 2
        if n == 4:
            return 3
        if n == 3:
            return 4
        if n == 2:
            return 5
        else:
            return 6
    
    return [get_rank(fixed + zero), get_rank(fixed)]