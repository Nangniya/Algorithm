let input = require('fs').readFileSync(0).toString().trim().split('\n');
const N = Number(input[0]);
let answer = 0;
input[1].split('').map(Number).map(e => answer += e);
console.log(answer);