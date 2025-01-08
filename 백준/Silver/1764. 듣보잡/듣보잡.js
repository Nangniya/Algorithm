const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [N, M] = input[0].split(" ").map(Number);
const set = new Set();
const answer = [];

for (let i = 1; i <= N; i++) {
  set.add(input[i]);
}
for (let i = N + 1; i < input.length; i++) {
  if (set.has(input[i])) answer.push(input[i]);
}

console.log(`${answer.length}\n${answer.sort().join("\n")}`);
