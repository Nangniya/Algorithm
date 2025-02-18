const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const [N, scores] = [input[0], input.slice(1)];
const DP = Array(N).fill(0);

DP[0] = scores[0];
DP[1] = scores[0] + scores[1];
DP[2] = Math.max(scores[0] + scores[2], scores[1] + scores[2]);

for (let i = 3; i < N; i++) {
  DP[i] = Math.max(
    DP[i - 3] + scores[i - 1] + scores[i], // 전 계단 + 전전전계단 + 현재 계단
    DP[i - 2] + scores[i] // 전전계단 + 현재 계단
  );
}

console.log(DP[N - 1]);
