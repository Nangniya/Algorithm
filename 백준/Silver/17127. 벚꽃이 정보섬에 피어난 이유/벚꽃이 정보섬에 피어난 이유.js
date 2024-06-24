const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");
const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);

let maxSum = 0;

for (let i = 1; i < N - 2; i++) {
  for (let j = i + 1; j < N - 1; j++) {
    for (let k = j + 1; k < N; k++) {
      const group1 = arr.slice(0, i);
      const group2 = arr.slice(i, j);
      const group3 = arr.slice(j, k);
      const group4 = arr.slice(k);

      const p1 = group1.reduce((acc, cur) => acc * cur, 1);
      const p2 = group2.reduce((acc, cur) => acc * cur, 1);
      const p3 = group3.reduce((acc, cur) => acc * cur, 1);
      const p4 = group4.reduce((acc, cur) => acc * cur, 1);

      const sum = p1 + p2 + p3 + p4;
      maxSum = Math.max(maxSum, sum);
    }
  }
}
console.log(maxSum);
