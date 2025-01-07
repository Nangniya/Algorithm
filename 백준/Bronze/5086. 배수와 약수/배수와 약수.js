const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const answer = [];

for (let i = 0; i < input.length - 1; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  if (b % a === 0) answer.push("factor");
  else if (a % b === 0) answer.push("multiple");
  else answer.push("neither");
}

console.log(answer.join("\n"));