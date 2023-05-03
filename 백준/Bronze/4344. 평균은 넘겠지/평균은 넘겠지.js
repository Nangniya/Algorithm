let input = require('fs').readFileSync(0).toString().trim().split('\n');
const C = Number(input.shift());
const answer = [];
for(let i = 0; i < C; i++){
    let arr = input[i].split(' ').map(Number);
    let N = Number(arr.shift());
    let sum = arr.reduce((acc, curr) => acc + curr);
    let mean = sum / N;
    let newArr = arr.filter(e => e > mean);
    answer.push((newArr.length / N * 100).toFixed(3) +'%');
}
console.log(answer.join('\n'));