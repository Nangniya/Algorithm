const input = require("fs").readFileSync(0).toString().trim();

const answer = [];

let N = Number(input);
let divider = 2;

while (N > 1) {
  if (N % divider === 0) {
    answer.push(divider);
    N = N / divider;
  } else {
    divider++;
  }
}

console.log(answer.join("\n"));