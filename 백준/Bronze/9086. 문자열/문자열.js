let input = require('fs').readFileSync(0).toString().trim().split('\n');
const T = Number(input[0]);
const arr = [];
for(let i = 1; i <= T; i++){
  arr.push(input[i][0] + input[i][input[i].length - 1]);
}
console.log(arr.join('\n'));