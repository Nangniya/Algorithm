const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");
const [a1, a0] = input[0].split(" ").map(Number);
const c = Number(input[1]);
const n0 = Number(input[2]);

if (a1 - c > 0) {
  console.log(0);
} else {
  const result = a1 * n0 + a0 <= c * n0 ? 1 : 0;
  console.log(result);
}