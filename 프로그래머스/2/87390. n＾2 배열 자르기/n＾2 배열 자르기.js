function solution(n, left, right) {
    const answer = [];
    for (let i = left; i <= right; i++) {
        const row = Math.floor(i / n);
        const col = i % n;
        answer.push(Math.max(row + 1, col + 1));
    }
    return answer;
}