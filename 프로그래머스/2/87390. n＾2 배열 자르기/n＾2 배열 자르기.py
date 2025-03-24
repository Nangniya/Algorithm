def solution(n, left, right):
    result = []
    for idx in range(left, right + 1):
        row = idx // n
        col = idx % n
        result.append(max(row + 1, col + 1))
    return result