const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const N = Number(input[0]);
wires = [];

for (let i = 1; i <= N; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  wires.push([a, b]);
}

wires.sort((a, b) => a[0] - b[0]);

const DP = Array(N).fill(1);

for (let i = 0; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (wires[i][1] > wires[j][1]) {
      DP[i] = Math.max(DP[i], DP[j] + 1);
    }
  }
}

console.log(N - Math.max(...DP));
