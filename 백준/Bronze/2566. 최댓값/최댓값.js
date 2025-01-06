const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const matrix = input.map((arr) => arr.split(" ").map(Number));
let [maxRow, maxCol, maxNum] = [0, 0, 0];

for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (maxNum <= matrix[i][j]) {
      [maxRow, maxCol, maxNum] = [i + 1, j + 1, matrix[i][j]];
    }
  }
}

console.log(maxNum + "\n" + maxRow + " " + maxCol);
