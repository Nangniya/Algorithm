const input = require("fs").readFileSync(0).toString().trim();

let answer = 1;

for (let i = 0; i < Math.floor(input.length / 2); i++) {
  if (input[i] !== input[input.length - 1 - i]) {
    answer = 0;
    break;
  }
}

console.log(answer);
