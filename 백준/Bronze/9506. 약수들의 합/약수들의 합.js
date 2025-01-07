const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const answer = [];

for (let i = 0; i < input.length - 1; i++) {
  const factors = [];
  const N = input[i];
  for (let j = 1; j < N; j++) {
    if (N % j === 0) factors.push(j);
  }
  if (factors.reduce((acc, cur) => acc + cur, 0) === N) {
    answer.push(`${N} = ${factors.join(" + ")}`);
  } else {
    answer.push(`${N} is NOT perfect.`);
  }
}

console.log(answer.join("\n"));
