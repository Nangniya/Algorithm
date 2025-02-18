const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());
const N = Number(input[0]);
const triangles = input.slice(1).map((arr) => arr.split(" ").map(Number));

for (let i = N - 2; i >= 0; i--) {
  for (let j = 0; j < triangles[i].length; j++) {
    triangles[i][j] += Math.max(triangles[i + 1][j], triangles[i + 1][j + 1]);
  }
}
console.log(triangles[0][0]);
