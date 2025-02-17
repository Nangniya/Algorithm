const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");
const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);

const DP = new Array(N).fill(0);
DP[0] = arr[0];
let max = DP[0];

for (let i = 1; i < N; i++) {
  DP[i] = Math.max(DP[i - 1] + arr[i], arr[i]);
  max = Math.max(DP[i], max);
}

console.log(max);
