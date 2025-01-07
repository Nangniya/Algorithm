const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const answer = [];

for (let i = 0; i < input.length - 1; i++) {
  const [a, b, c] = input[i]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  if (a + b > c) {
    if (a === b && b === c) answer.push("Equilateral");
    else if ((a === b) | (b === c)) answer.push("Isosceles");
    else answer.push("Scalene");
  } else {
    answer.push("Invalid");
  }
}

console.log(answer.join("\n"));
