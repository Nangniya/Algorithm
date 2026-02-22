const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const gears = input.slice(0, 4).map((row) => row.trim().split("").map(Number));
const K = Number(input[4]);
const rotates = input.slice(5).map((line) => line.split(" ").map(Number));

function rotate(gearIdx, direction) {
  if (direction === 1) gears[gearIdx].unshift(gears[gearIdx].pop());
  if (direction === -1) gears[gearIdx].push(gears[gearIdx].shift());
}

for (let [num, direction] of rotates) {
  const idx = num - 1;
  const directions = Array(4).fill(0);
  directions[idx] = direction;

  for (let i = idx; i > 0; i--) {
    if (gears[i][6] !== gears[i - 1][2]) directions[i - 1] = -directions[i];
    else break;
  }

  for (let i = idx; i < 3; i++) {
    if (gears[i][2] !== gears[i + 1][6]) directions[i + 1] = -directions[i];
    else break;
  }

  for (let i = 0; i < 4; i++) {
    if (directions[i] !== 0) rotate(i, directions[i]);
  }
}

let answer = 0;
for (let i = 0; i < 4; i++) {
  if (gears[i][0] === 1) answer += Math.pow(2, i);
}
console.log(answer);
