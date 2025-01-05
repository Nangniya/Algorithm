const input = require("fs").readFileSync(0).toString().trim();

const tobe = [1, 1, 2, 2, 2, 8];
const arr = input.split(" ").map(Number);
const answer = [];

for (let i = 0; i < arr.length; i++) {
  answer[i] = tobe[i] - arr[i];
}

console.log(answer.join(' '));
