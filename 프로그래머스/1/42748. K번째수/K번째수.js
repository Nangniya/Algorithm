function solution(array, commands) {
    const answer = [];
    for(let i = 0; i < commands.length; i++) {
        const [start, end, idx] = commands[i];
        const copy = array.slice(start - 1, end).sort((a, b) => a - b);
        answer.push(copy[idx - 1]);
    }
    return answer;
}