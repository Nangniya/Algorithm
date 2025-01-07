const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const X = {};
const Y = {};

for (let i = 0; i < input.length; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  X[x] = (X[x] || 0) + 1;
  Y[y] = (Y[y] || 0) + 1;
}

const resultX = Object.keys(X).find((key) => X[key] === 1);
const resultY = Object.keys(Y).find((key) => Y[key] === 1);

console.log(`${resultX} ${resultY}`);