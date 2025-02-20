const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const items = [];

const [N, K] = input[0].split(" ").map(Number);
for (let i = 1; i <= N; i++) {
  const [w, v] = input[i].split(" ").map(Number);
  items.push([w, v]);
}

const DP = Array.from({ length: N + 1 }, () => Array(K + 1).fill(0));

for (let i = 1; i <= N; i++) {
  const [w, v] = items[i - 1];

  for (let j = 1; j <= K; j++) {
    if (j < w) {
      DP[i][j] = DP[i - 1][j];
    } else {
      DP[i][j] = Math.max(DP[i - 1][j], DP[i - 1][j - w] + v);
    }
  }
}
console.log(DP[N][K]);
