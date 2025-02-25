const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [N, S] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let left = 0,
  right = 0,
  sum = 0;
let answer = Infinity;

while (right < N) {
  sum += arr[right++];

  while (sum >= S) {
    answer = Math.min(answer, right - left);
    sum -= arr[left++];
  }
}

console.log(answer === Infinity ? 0 : answer);
