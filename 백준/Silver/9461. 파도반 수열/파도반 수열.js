const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const T = input.shift();
const max = Math.max(...input);

const DP = [null, 1, 1, 1, 2, 2, 3, 4, 5, 7, 9];

for (let i = 11; i <= max; i++) {
  DP[i] = DP[i - 3] + DP[i - 2];
}

console.log(input.map((v) => DP[v]).join("\n"));
