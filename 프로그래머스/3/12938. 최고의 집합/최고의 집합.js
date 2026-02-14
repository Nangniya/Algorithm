function solution(n, s) {
    if (n > s) return [-1];
    
    const [div, mod] = [Math.floor(s / n), s % n];
    const answer = Array(n).fill(div);
    
    for (let i = 0; i < mod; i++) {
        answer[n - 1 - i] += 1;
    }
    return answer;
}