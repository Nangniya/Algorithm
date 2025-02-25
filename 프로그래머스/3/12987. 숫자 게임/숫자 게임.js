function solution(A, B) {
    A.sort((a, b) => b - a);
    B.sort((a, b) => b - a);
    
    let answer = 0;
    let bIdx = 0;
    for(let aIdx = 0; aIdx < A.length; aIdx++) {
        if(A[aIdx] < B[bIdx]) {
            answer++;
            bIdx++;
        }
    }
    
    return answer;
}