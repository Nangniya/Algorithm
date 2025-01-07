const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
let [minX, maxX, minY, maxY] = [Infinity, -Infinity, Infinity, -Infinity];

for (let i = 1; i <= N; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  [minX, maxX, minY, maxY] = [
    Math.min(x, minX),
    Math.max(x, maxX),
    Math.min(y, minY),
    Math.max(y, maxY),
  ];
}

console.log((maxX - minX) * (maxY - minY));
