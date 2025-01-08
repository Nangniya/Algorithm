const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);

const origin = input[1].split(" ").map(Number);
const ordered = [...new Set(origin)].sort((a, b) => a - b);

const map = new Map();
ordered.forEach((v, i) => {
  map.set(v, i);
});

console.log(origin.map((v) => map.get(v)).join(" "));
