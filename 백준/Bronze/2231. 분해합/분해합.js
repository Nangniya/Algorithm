const input = require("fs").readFileSync(0).toString().trim();
const N = Number(input);
let answer = 0;
for (let i = 1; i <= N; i++) {
  const arr = String(i).split("").map(Number);
  const M = i + arr.reduce((acc, cur) => acc + cur, 0);
  if (M === N) {
    answer = i;
    break;
  }
}
console.log(answer === 0 ? 0 : answer);