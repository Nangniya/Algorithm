const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const board = input.slice(1).map((row) => row.split(" ").map(Number));

function combinations(arr, n) {
  if (n === 1) return arr.map((v) => [v]);

  const result = [];
  arr.forEach((fixed, idx) => {
    const rest = arr.slice(idx + 1);
    const combis = combinations(rest, n - 1);
    const combine = combis.map((v) => [fixed, ...v]);
    result.push(...combine);
  });
  return result;
}

const chickens = [];
const houses = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (board[i][j] === 1) houses.push([i, j]);
    if (board[i][j] === 2) chickens.push([i, j]);
  }
}

const combis = combinations(chickens, M);
let answer = Infinity;

for (const chickenCombi of combis) {
  let cityDist = 0;
  for (const [hr, hc] of houses) {
    let minDist = Infinity;
    for (const [cr, cc] of chickenCombi) {
      minDist = Math.min(minDist, Math.abs(hr - cr) + Math.abs(hc - cc));
    }
    cityDist += minDist;
  }
  answer = Math.min(cityDist, answer);
}

console.log(answer);
