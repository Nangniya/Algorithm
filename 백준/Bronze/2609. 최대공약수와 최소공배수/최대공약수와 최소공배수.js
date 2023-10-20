const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ");
const [a, b] = input.map((a) => parseInt(a));
let max = 1;
let min = 1;
for (let i = 1; i <= Math.min(a, b); i++) {
  if (a % i === 0 && b % i === 0 && i > max) {
    max = i;
  }
}
for (let i = Math.max(a, b); i <= a * b; i++) {
  if (i % a === 0 && i % b === 0) {
    min = i;
    break;
  }
}

console.log(max + "\n" + min);
