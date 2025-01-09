const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [A, B] = input[0].split(" ").map(Number);
const aSet = new Set(input[1].split(" ").map(Number));
const bSet = new Set(input[2].split(" ").map(Number));

const abSet = new Set();

for (let n of aSet) {
  if (bSet.has(n)) abSet.add(n);
}

console.log(aSet.size + bSet.size - 2 * abSet.size);
