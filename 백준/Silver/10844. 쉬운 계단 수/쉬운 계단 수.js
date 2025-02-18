const input = require("fs").readFileSync(0).toString().trim();

const N = Number(input);
const DP = Array.from({ length: N }, () => Array(10).fill(0));
const MOD = 1000000000;
DP[0].forEach((_, i) => (DP[0][i] = i !== 0 ? 1 : 0));

for (let i = 1; i < N; i++) {
  for (let j = 0; j < 10; j++) {
    if (j === 0) {
      DP[i][j] = DP[i - 1][1] % MOD;
    } else if (j === 9) {
      DP[i][j] = DP[i - 1][8] % MOD;
    } else {
      DP[i][j] = (DP[i - 1][j - 1] + DP[i - 1][j + 1]) % MOD;
    }
  }
}

console.log(DP[N - 1].reduce((acc, cur) => (acc + cur) % MOD, 0));
