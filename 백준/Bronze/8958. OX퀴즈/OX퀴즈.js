let input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");
const T = parseInt(input.shift());
const answer = [];
for (let i = 0; i < T; i++) {
  let score = 0;
  let currentScore = 0;
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] === "O") {
      currentScore += 1;
      score += currentScore;
    } else if (input[i][j] === "X") {
      currentScore = 0;
    }
  }
  answer.push(score);
}
console.log(answer.join("\n"));