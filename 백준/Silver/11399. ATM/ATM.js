const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const N = Number(input[0]);
const times = input[1].split(" ").map(Number);
times.sort((a, b) => a - b);
let answer = 0;
let sum = 0;
times.forEach((v) => {
  sum += v;
  answer += sum;
});
console.log(answer);
