let input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");
const N = Number(input.shift());
console.log(input.sort((a, b) => a - b).join("\n"));