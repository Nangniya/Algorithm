const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");
const N = parseInt(input[0].split(" ")[0]);
const M = parseInt(input[0].split(" ")[1]);
const arr = input[1].split(" ").map(Number);

let max = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < N; k++) {
      if (i == j || i == k || j == k) {
        continue;
      }
      const sum = arr[i] + arr[j] + arr[k];
      if (sum > max && sum <= M) {
        max = sum;
      }
      if (max == M) {
        break;
      }
    }
  }
}

console.log(max);
