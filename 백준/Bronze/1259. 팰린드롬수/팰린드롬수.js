const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

input.pop();

const answer = [];

for (let i = 0; i < input.length; i++) {
  let isPalindrome = true;
  let line = input[i].split("");
  for (let j = 0; j < line.length / 2; j++) {
    if (line[j] !== line[line.length - 1 - j]) {
      isPalindrome = false;
      break;
    }
  }
  answer.push(isPalindrome ? "yes" : "no");
}

console.log(answer.join("\n"));