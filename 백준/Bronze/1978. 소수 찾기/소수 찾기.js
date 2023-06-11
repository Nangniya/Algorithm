let input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");
const N = Number(input.shift());
const list = input[0].split(" ").map(Number);
let answer = 0;
for (let i = 0; i < N; i++) {
  for (let j = 2; j <= list[i]; j++) {
    if (j === list[i]) {
      answer += 1;
    }
    if (list[i] % j === 0) {
      break;
    }
  }
}
console.log(answer);