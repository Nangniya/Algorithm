let input = require('fs').readFileSync(0).toString().trim().split('\n');
const T = Number(input[0]);
const arr = [];
for(let i = 1; i <= T; i++){
  [R, S] = input[i].split(' ');
  let str = '';
  for(let j = 0; j < S.length; j++){
    str += S[j].repeat(Number(R));
  }
  arr.push(str);
}
console.log(arr.join('\n'));