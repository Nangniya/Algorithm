const input = require("fs").readFileSync(0).toString().trim();
const arr = input.split("-");
const finals = arr.map((v) =>
  v
    .split("+")
    .map(Number)
    .reduce((acc, cur) => acc + cur, 0)
);
let answer = finals[0] * 2;
finals.forEach((v) => (answer -= v));
console.log(answer);
