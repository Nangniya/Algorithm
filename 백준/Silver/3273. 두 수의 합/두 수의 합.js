const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);
const X = Number(input[2]);

arr.sort((a, b) => a - b);

let [left, right] = [0, N - 1];
let answer = 0;
while (left < right) {
  if (arr[left] + arr[right] === X) {
    answer++;
    left++;
    right--;
  }
  if (arr[left] + arr[right] < X) left++;
  if (arr[left] + arr[right] > X) right--;
}
console.log(answer);
