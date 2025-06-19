import sys
# input = sys.stdin.readline

input_data = [int(line) for line in sys.stdin]
n, array = input_data[0], input_data[1:]

def solution(n, array):
    answer = []
    stack = []
    cur_num, cur_idx = 1, 0
    
    while cur_idx < n:
        if len(stack) > 0 and stack[-1] == array[cur_idx]: 
            answer.append("-")
            stack.pop()
            cur_idx += 1
        else:
            stack.append(cur_num)
            answer.append("+")
            cur_num += 1
        if len(stack) > 0 and array[cur_idx] < stack[-1]:
            return "NO"
    return "\n".join(answer)


print(solution(n, array))
