const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const set = new Set(input.slice(1, N + 1));
const test = input.slice(N + 1);

let answer = 0;

for (let str of test) {
  if (set.has(str)) answer++;
}

console.log(answer);
