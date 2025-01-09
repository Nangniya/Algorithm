const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const getGCD = (a, b) => {
  while (b > 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const [a, A] = input[0].split(" ").map(Number);
const [b, B] = input[1].split(" ").map(Number);

let n = a * B + b * A;
let N = A * B;

const gcd = getGCD(n, N);

console.log(n / gcd + " " + N / gcd);
