let input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ");
let [A, B, V] = input.map(Number);
let height = A - B;
let answer = Math.ceil((V - B) / height);

console.log(answer);
