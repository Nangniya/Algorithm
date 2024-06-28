const input = require("fs").readFileSync(0).toString().trim();
const N = Number(input);
let answer = 0;

for (let i = 1; i * i <= N; i++) {
  answer++;
}
console.log(answer);
