const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const arr = input.map((row) => row.trim().split(""));
let answer = "";
const maxLength = Math.max(...arr.map((row) => row.length));

for (let i = 0; i < maxLength; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[j][i] !== undefined) answer += String(arr[j][i]);
  }
}

console.log(answer);
