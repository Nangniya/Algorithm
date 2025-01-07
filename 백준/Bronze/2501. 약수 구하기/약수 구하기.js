const [N, k] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const factors = [];
let isTrue = false;

for (let i = 1; i <= N; i++) {
  if (N % i === 0) factors.push(i);
  if (factors.length === k) {
    isTrue = true;
    break;
  }
}

console.log(isTrue ? factors[factors.length - 1] : 0);