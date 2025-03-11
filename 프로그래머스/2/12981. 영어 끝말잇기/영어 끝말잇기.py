def solution(n, words):
    used = {words[0]}
    for i in range(1, len(words)):
        p, turn = i % n + 1, i // n + 1
        last, first = words[i - 1][-1], words[i][0]
        if words[i] in used or last != first:
            return [p, turn]
        used.add(words[i])
    return [0, 0]