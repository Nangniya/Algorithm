const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [str1, str2] = input;
const [m, n] = [str1.length, str2.length];
const DP = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

for (let i = 1; i <= m; i++) {
  for (let j = 1; j <= n; j++) {
    if (str1[i - 1] === str2[j - 1]) {
      DP[i][j] = DP[i - 1][j - 1] + 1;
    } else {
      DP[i][j] = Math.max(DP[i - 1][j], DP[i][j - 1]);
    }
  }
}

console.log(DP[m][n]);
