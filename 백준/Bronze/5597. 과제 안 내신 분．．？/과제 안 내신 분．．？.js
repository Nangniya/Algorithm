let input = require('fs').readFileSync(0).toString().trim().split('\n').map(Number);
const arr = [];
for(let i = 1; i <= 30; i++){
  if(!input.includes(i)){
    arr.push(i);
  }
}
console.log(arr.join('\n'));