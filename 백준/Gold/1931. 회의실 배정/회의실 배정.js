const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const table = [];
const N = Number(input[0]);

input.forEach((v, i) => {
  if (i !== 0) {
    const [start, end] = v.split(" ").map(Number);
    table.push([start, end]);
  }
});
table.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  }
  return a[1] - b[1];
});

let answer = 1;
let prevE = table[0][1];

for (let i = 1; i < N; i++) {
  const [curS, curE] = table[i];
  if (prevE <= curS) {
    answer++;
    prevE = curE;
  }
}

console.log(answer);
