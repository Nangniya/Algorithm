const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const N = Number(input[0]);
const set = new Set(input[1].split(" ").map(Number));
const M = Number(input[2]);
const test = input[3].split(" ").map(Number);

const answer = [];
for (const item of test) {
  answer.push(set.has(item) ? 1 : 0);
}

console.log(answer.join("\n"));
