const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const N = Number(input[0]);
const test = input.slice(1).map(Number);

const stack = [];

for (let n of test) {
  if (n === 0) {
    stack.pop();
  } else {
    stack.push(n);
  }
}

console.log(stack.reduce((acc, cur) => acc + cur, 0));
