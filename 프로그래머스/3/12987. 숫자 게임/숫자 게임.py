def solution(A, B):
    A.sort(reverse=True)
    B.sort(reverse=True)
    
    answer = 0
    b_idx = 0
    for i in range(len(A)):
        if A[i] < B[b_idx]:
            answer += 1
            b_idx += 1
    
    return answer