const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const N = input.shift();
const answer = Array.from({ length: N }, () => Array(4).fill(0));

for (let i = 0; i < N; i++) {
  let rest = input[i];
  answer[i][0] = Math.floor(rest / 25);
  rest -= answer[i][0] * 25;
  answer[i][1] = Math.floor(rest / 10);
  rest -= answer[i][1] * 10;
  answer[i][2] = Math.floor(rest / 5);
  rest -= answer[i][2] * 5;
  answer[i][3] = rest;
}

console.log(answer.map((row) => row.join(" ")).join("\n"));
