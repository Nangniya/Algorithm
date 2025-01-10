const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const N = Number(input[0]);
const test = input.slice(1);

const stack = [];
const answer = [];

for (let item of test) {
  const I = Number(item[0]);

  if (I === 1) stack.push(Number(item.split(" ")[1]));
  if (I === 2) answer.push(stack.length > 0 ? stack.pop() : -1);
  if (I === 3) answer.push(stack.length);
  if (I === 4) answer.push(stack.length > 0 ? 0 : 1);
  if (I === 5) answer.push(stack.length > 0 ? stack[stack.length - 1] : -1);
}

console.log(answer.join("\n"));
