const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const N = Number(input[0]);
const sequence = input[1].split(" ").map(Number);
const IDP = Array(N).fill(1); // 증가
const DDP = Array(N).fill(1); // 감소

for (let i = 1; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (sequence[i] > sequence[j]) {
      IDP[i] = Math.max(IDP[i], IDP[j] + 1);
    }
  }
}

for (let i = N - 2; i >= 0; i--) {
  for (let j = N - 1; j > i; j--) {
    if (sequence[i] > sequence[j]) {
      DDP[i] = Math.max(DDP[i], DDP[j] + 1);
    }
  }
}

let answer = 0;
for (let i = 0; i < N; i++) {
  answer = Math.max(answer, IDP[i] + DDP[i] - 1);
}

console.log(answer);
