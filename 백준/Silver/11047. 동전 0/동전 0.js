const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [N, K] = input[0].split(" ").map(Number);
const coins = input.slice(1).map(Number);

let cur = K;
let idx = N - 1;
let answer = 0;

while (cur > 0) {
  const coin = coins[idx];
  if (cur >= coin) {
    cur -= coin;
    answer++;
  } else idx--;
}

console.log(answer);
