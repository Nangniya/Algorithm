const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ");
const [N, K] = input.map((a) => parseInt(a));
let answer = 1;
for (let i = N; i > N - K; i--) {
  answer *= i;
}
for (let i = K; i > 0; i--) {
  answer /= i;
}
console.log(answer);