let [a, b, c] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

if (a + b <= c) {
  c = a + b - 1;
}

console.log(a + b + c);
