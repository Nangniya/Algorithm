const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());

input.sort((a, b) => {
  const [x1, y1] = a.split(" ").map(Number);
  const [x2, y2] = b.split(" ").map(Number);
  if (y1 !== y2) return y1 - y2;
  return x1 - x2;
});

console.log(input.join("\n"));
