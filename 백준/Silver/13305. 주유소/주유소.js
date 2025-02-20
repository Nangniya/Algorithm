const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const N = Number(input[0]);
const DIST = input[1].split(" ").map(Number);
const COST = input[2].split(" ").map(Number);

let answer = 0;
let minCost = COST[0];
for (let i = 0; i < N - 1; i++) {
  minCost = Math.min(minCost, COST[i]);
  answer += minCost * DIST[i];
}

console.log(answer);
