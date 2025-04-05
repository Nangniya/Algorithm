def solution(s):
    answer = []
    for char in s:
        stack = []
        count = 0
        for c in char:
            stack.append(c)
            while len(stack) >= 3 and stack[-3:] == ['1', '1', '0']:
                count += 1
                for _ in range(3):
                    stack.pop()
        if '0' not in stack:
            answer.append('110' * count + "".join(stack))
        else:
            idx = len(stack) - 1 - stack[::-1].index('0')
            answer.append("".join(stack[:idx + 1]) + '110' * count + "".join(stack[idx + 1:]))
    return answer
                
                