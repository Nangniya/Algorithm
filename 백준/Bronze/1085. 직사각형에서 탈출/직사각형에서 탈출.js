const [x, y, w, h] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(Math.min(Math.min(x, w - x), Math.min(y, h - y)));