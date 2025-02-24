function solution(numbers) {
    const arr = Array(10).fill(0);
    let answer = arr.reduce((acc, cur, index) => acc + index);
    for(const num of numbers) {
        answer -= num;
    }
    return answer;
}