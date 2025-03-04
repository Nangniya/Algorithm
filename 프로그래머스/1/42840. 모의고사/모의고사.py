def solution(answers):
    patterns = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ]
    scores = [0, 0, 0]
    
    for i, answer in enumerate(answers):
        for j, student in enumerate(patterns):
            if student[i % len(student)] == answer:
                scores[j] += 1
    
    max_score = max(scores)
    answer = []
    for i in range(3):
        if scores[i] == max_score:
            answer.append(i + 1)
    
    return answer