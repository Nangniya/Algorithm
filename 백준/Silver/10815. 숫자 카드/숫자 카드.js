const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const [N, M] = [input[0], input[1]].map(Number);
const owned = new Set(input[1].split(" ").map(Number));
const test = input[3].split(" ").map(Number);
const answer = [];

for (let v of test) {
  answer.push(owned.has(v) ? 1 : 0);
}

console.log(answer.join(" "));
