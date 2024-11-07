function solution(s) {
    const arr = s.slice(2, -2).split('},{').sort((a, b) => a.length - b.length);
    const answer = [];
    for(const item of arr) {
       const numbers = item.split(',');
        for(const num of numbers) {
            if(!answer.includes(Number(num))) answer.push(Number(num));
        }
    }
    
    return answer;
}