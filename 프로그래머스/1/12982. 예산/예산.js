function solution(d, budget) {
    const sorted = d.sort((a, b) => a - b);
    let answer = 0;
    for(const m of sorted) {
        if(budget - m >= 0) {
            answer++;
            budget -= m;
        }
    }
    return answer;
}