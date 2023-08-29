const input = require("fs").readFileSync(0).toString().trim();
const N = Number(input);

function solution(N) {
  if (N === 0 || N === 1) return 1;
  return N * solution(N - 1);
}

console.log(solution(N));