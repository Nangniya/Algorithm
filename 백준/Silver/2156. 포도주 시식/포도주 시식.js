const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const N = Number(input[0]);
const quantities = input.slice(1).map(Number);
const DP = Array(N).fill(0);

DP[0] = quantities[0];
DP[1] = quantities[0] + quantities[1];
DP[2] = Math.max(
  quantities[0] + quantities[2],
  quantities[1] + quantities[2],
  DP[1]
);

for (let i = 3; i < N; i++) {
  DP[i] = Math.max(
    DP[i - 1],
    DP[i - 2] + quantities[i],
    DP[i - 3] + quantities[i - 1] + quantities[i]
  );
}

console.log(DP[N - 1]);
