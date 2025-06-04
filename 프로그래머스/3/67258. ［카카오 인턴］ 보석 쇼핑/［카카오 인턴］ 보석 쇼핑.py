def solution(gems):
    answer = [1, len(gems)]
    gem_kinds = len(set(gems))
    start, end = 0, 0
    gems_count = {}
    gems_count[gems[0]] = 1
    
    while start < len(gems) and end < len(gems):
        if len(gems_count) == gem_kinds:
            if end - start < answer[1] - answer[0]:
                answer = [start + 1, end + 1]
            
            gems_count[gems[start]] -= 1

            if gems_count[gems[start]] == 0:
                del gems_count[gems[start]]
            
            start += 1
        else:
            end += 1
            if end >= len(gems):
                break
            
            if gems[end] in gems_count:
                gems_count[gems[end]] += 1
            else:
                gems_count[gems[end]] = 1
    
    return answer

    