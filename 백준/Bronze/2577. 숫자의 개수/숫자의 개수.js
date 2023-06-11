let input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");
let num = String(input[0] * input[1] * input[2]);
for (let i = 0; i <= 9; i++) {
  console.log(num.split(i).length - 1);
}