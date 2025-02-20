const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const N = Number(input[0]);
const sequence = input[1].split(" ").map(Number);
const DP = Array(N).fill(1);

for (let i = 1; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (sequence[i] > sequence[j]) {
      DP[i] = Math.max(DP[i], DP[j] + 1);
    }
  }
}

console.log(Math.max(...DP));
