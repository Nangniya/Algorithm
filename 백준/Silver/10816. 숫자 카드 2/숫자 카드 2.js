const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [N, M] = [input[0], input[2]].map(Number);
const owned = input[1].split(" ").map(Number);
const test = input[3].split(" ").map(Number);

const map = new Map();
const answer = [];

for (let v of owned) {
  map.set(v, (map.get(v) || 0) + 1);
}
for (let v of test) {
  answer.push(map.get(v) || 0);
}

console.log(answer.join(" "));
