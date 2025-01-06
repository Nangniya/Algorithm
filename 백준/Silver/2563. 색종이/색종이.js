const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const paper = Array.from({ length: 100 }, () => Array(100).fill(0));

for (let i = 1; i <= N; i++) {
  const [x, y] = input[i].split(" ").map(Number);

  for (let dx = 0; dx < 10; dx++) {
    for (let dy = 0; dy < 10; dy++) {
      paper[x + dx][y + dy] = 1;
    }
  }
}

const answer = paper.reduce(
  (sum, row) => sum + row.reduce((acc, cell) => acc + cell, 0),
  0
);

console.log(answer);