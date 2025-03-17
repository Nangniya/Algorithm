from itertools import permutations

def solution(n, weak, dist):
    weak_length = len(weak)
    answer = len(dist) + 1
    weak += [l + n for l in weak]
    
    for i in range(weak_length):
        for friends in permutations(dist, len(dist)):
            count = 1
            position = weak[i] + friends[count - 1]
            for j in range(i, i + weak_length):
                if position < weak[j]:
                    count += 1
                    if count > len(dist):
                        break
                    position = weak[j] + friends[count - 1]
            answer = min(answer, count)
            
    return answer if answer <= len(dist) else -1