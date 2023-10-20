let input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");
const [N, M] = input
  .shift()
  .split(" ")
  .map((a) => parseInt(a));
const answer = [];
const line = ["WBWBWBWB", "BWBWBWBW"];
input = input.map((a) => a.split(""));
for (let i = 0; i <= N - 8; i++) {
  for (let j = 0; j <= M - 8; j++) {
    for (let l = 0; l < line.length; l++) {
      let count = 0;
      for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
          const current = input[i + x][j + y];
          if (current !== line[(x + l) % 2][y]) {
            count++;
          }
        }
      }
      answer.push(count);
    }
  }
}
console.log(Math.min(...answer));
