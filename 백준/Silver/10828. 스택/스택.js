let input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");
const N = Number(input.shift());
let stack = [];
let answer = [];
for (let i = 0; i < N; i++) {
  if (input[i].includes("push")) {
    stack.push(input[i].slice(5));
  } else if (input[i] == "pop") {
    stack.length ? answer.push(stack.pop()) : answer.push(-1);
  } else if (input[i] == "size") {
    answer.push(stack.length);
  } else if (input[i] == "empty") {
    stack.length ? answer.push(0) : answer.push(1);
  } else if (input[i] == "top") {
    stack.length ? answer.push(stack[stack.length - 1]) : answer.push(-1);
  }
}
console.log(answer.join("\n"));
