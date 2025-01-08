const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const N = input.shift();
input.sort((a, b) => {
  const [x1, y1] = a.split(" ").map(Number);
  const [x2, y2] = b.split(" ").map(Number);

  if (x1 !== x2) return x1 - x2;

  return y1 - y2;
});

console.log(input.join("\n"));