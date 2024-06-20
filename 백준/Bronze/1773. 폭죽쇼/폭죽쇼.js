const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");
const [N, C] = input[0].split(" ").map(Number);
const secondArr = input.slice(1, input.length).map(Number);
let answer = 0;
for (let i = 1; i <= C; i++) {
  for (let j = 0; j < N; j++) {
    if (i % secondArr[j] === 0) {
      answer++;
      break;
    }
  }
}
console.log(answer);