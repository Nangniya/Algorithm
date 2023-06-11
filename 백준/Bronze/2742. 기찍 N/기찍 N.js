let input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");
const N = Number(input);
const answer = [];
for (let i = N; i > 0; i--) {
  answer.push(i);
}
console.log(answer.join("\n"));