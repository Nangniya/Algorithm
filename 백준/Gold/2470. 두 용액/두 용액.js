const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);

arr.sort((a, b) => a - b);

let [left, right] = [0, N - 1];
let zero = Infinity;
const answer = [arr[0], arr[N - 1]];

while (left < right) {
  const sum = Math.abs(arr[left] + arr[right]);
  if (zero > sum) {
    zero = sum;
    answer[0] = arr[left];
    answer[1] = arr[right];
  }
  if (sum === 0) break;
  if (arr[left] + arr[right] < 0) left++;
  else right--;
}
console.log(answer.join(" "));
