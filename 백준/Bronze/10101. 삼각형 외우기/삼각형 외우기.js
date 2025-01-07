const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const set = new Set(input);
const total = input.reduce((acc, cur) => acc + cur, 0);

let answer = "";

if (total === 180) {
  if (set.size === 1 && set.has(60)) answer = "Equilateral";
  if (set.size === 2) answer = "Isosceles";
  if (set.size === 3) answer = "Scalene";
} else {
  answer = "Error";
}

console.log(answer);
