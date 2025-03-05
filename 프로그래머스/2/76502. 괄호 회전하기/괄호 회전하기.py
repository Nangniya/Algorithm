def solution(s):
    count = 0
    for x in range(len(s)):
        stack = []
        is_valid = True
        for i in range(x, x + len(s)):
            idx = i % len(s)
            c = s[idx]
            if c == '[' or c == '{' or c == '(':
                stack.append(c)
            else:
                if not stack:
                    is_valid = False
                    break
                elif c == ']' and stack[-1] == '[':
                    stack.pop()
                elif c == '}' and stack[-1] == '{':
                    stack.pop()
                elif c == ')' and stack[-1] == '(':
                    stack.pop()
                else:
                    is_valid = False
                    break
        if is_valid and not stack:
            count += 1
    return count