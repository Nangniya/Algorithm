const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const N = Number(input[0]);
const trees = input
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b);

const getGCD = (a, b) => {
  while (b > 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const distances = [];
for (let i = 1; i < N; i++) {
  distances.push(trees[i] - trees[i - 1]);
}

let gcd = distances[0];
for (let i = 1; i < distances.length; i++) {
  gcd = getGCD(gcd, distances[i]);
}

let answer = 0;
for (let i = 0; i < distances.length; i++) {
  answer += distances[i] / gcd - 1;
}

console.log(answer);
