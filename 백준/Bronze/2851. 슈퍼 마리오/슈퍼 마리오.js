const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);
let subtraction = 100 - input[0];
let sum = 0;
for (mushroom of input) {
  if (Math.abs(subtraction) >= Math.abs(100 - sum - mushroom)) {
    sum += mushroom;
    subtraction = 100 - sum;
  } else {
    break;
  }
}
console.log(sum);
