def solution(queue1, queue2):
    sum1, sum2 = sum(queue1), sum(queue2)
    if (sum1 + sum2) % 2 != 0:
        return -1
    target = (sum1 + sum2) // 2
    queue = queue1 + queue2
    
    cur_sum = sum1
    left, right = 0, len(queue1)
    max_moves = len(queue1) * 3
    
    for moves in range(max_moves): 
        if cur_sum == target:
            return moves

        if cur_sum > target:
            cur_sum -= queue[left]
            left += 1
        else:
            cur_sum += queue[right % len(queue)]
            right += 1
    return -1