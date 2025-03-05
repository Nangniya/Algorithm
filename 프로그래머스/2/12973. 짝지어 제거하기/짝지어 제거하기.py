def solution(s):
    stack = []
    for c in s:
        if not stack:
            stack.append(c)
        else:
            if stack[-1] == c:
                stack.pop()
            else:
                stack.append(c)
    answer = 0
    if not stack:
        answer = 1
    return answer