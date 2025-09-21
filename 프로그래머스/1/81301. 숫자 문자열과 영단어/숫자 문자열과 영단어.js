function solution(s) {
    const strings = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const answer = [];
    
    let result = s;
    for (let i = 0; i < strings.length; i++) {
        result = result.replaceAll(strings[i], i);
    }
    answer.push(result);
    
    return Number(answer.join(''))
}