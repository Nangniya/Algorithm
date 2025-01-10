const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const test = input.slice(0, input.length - 1);
const answer = [];

for (let S of test) {
  const stack = [];
  let isValid = true;

  for (let s of S) {
    if (s === "(" || s === "[") stack.push(s);
    if (s === ")" || s === "]") {
      const pair = s === ")" ? "(" : "[";
      if (stack.length > 0 && stack[stack.length - 1] === pair) {
        stack.pop();
      } else {
        isValid = false;
        break;
      }
    }
  }
  answer.push(isValid && stack.length === 0 ? "yes" : "no");
}

console.log(answer.join("\n"));
