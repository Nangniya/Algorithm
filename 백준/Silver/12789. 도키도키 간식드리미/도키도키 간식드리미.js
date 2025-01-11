const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const test = input[1].split(" ").map(Number);
const N = Number(input[0]);

const stack = [];
let target = 1;
let answer = true;

for (let n of test) {
  while (stack.length > 0 && stack[stack.length - 1] === target) {
    stack.pop();
    target++;
  }

  if (n === target) {
    target++;
  } else if (n > target) {
    stack.push(n);
  } else {
    answer = false;
    break;
  }
}

while (stack.length > 0) {
  if (stack.pop() !== target) {
    answer = false;
    break;
  }
  target++;
}

console.log(answer ? "Nice" : "Sad");
