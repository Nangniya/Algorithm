const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());
const N = Number(input[0]);
const houses = input.slice(1).map((arr) => arr.split(" ").map(Number));
const DP = Array.from({ length: N }, () => Array(3).fill(Infinity));

for (let j = 0; j < 3; j++) {
  DP[0][j] = houses[0][j];
}
for (let i = 1; i < N; i++) {
  for (let j = 0; j < 3; j++) {
    DP[i][j] =
      Math.min(...DP[i - 1].filter((_, idx) => idx !== j)) + houses[i][j];
  }
}

console.log(Math.min(...DP[N - 1]));
