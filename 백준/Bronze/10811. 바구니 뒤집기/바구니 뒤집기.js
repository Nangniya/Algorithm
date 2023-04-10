let input = require('fs').readFileSync(0).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
let list = Array.from({length: N}, (_, idx) => idx + 1);
let reverseList = input.slice(1).map(e => e.split(' ').map(Number));

for (let i = 0; i < M; i++) {
  let [start, end] = reverseList[i];
  list.splice(start - 1, end - start + 1, ...list.slice(start - 1, end).reverse());
}

console.log(list.join(' '));