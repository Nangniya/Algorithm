const input = require("fs").readFileSync(0).toString().trim();
const N = Number(input);

const DP = new Array(N + 1).fill(0);
DP[1] = 1;
DP[2] = 2;

for (let i = 3; i <= N; i++) {
  DP[i] = (DP[i - 1] + DP[i - 2]) % 15746;
}

console.log(DP[N]);
