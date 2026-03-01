const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const durability = input[1].split(" ").map(Number);
const robots = Array(N - 1).fill(false);

let step = 0;
let zeroCount = 0; // 내구도가 0인 칸의 개수를 추적

for (let d of durability) {
  if (d === 0) zeroCount++;
}

while (true) {
  step++;

  durability.unshift(durability.pop());
  robots.pop();
  robots.unshift(false);

  robots[N - 1] = false;

  for (let i = N - 2; i >= 0; i--) {
    if (robots[i] && !robots[i + 1] && durability[i + 1] >= 1) {
      robots[i] = false;
      robots[i + 1] = true;
      durability[i + 1]--;

      if (durability[i + 1] === 0) zeroCount++;
    }
  }
  robots[N - 1] = false;

  if (durability[0] > 0) {
    robots[0] = true;
    durability[0]--;
    if (durability[0] === 0) zeroCount++;
  }

  if (zeroCount >= K) {
    console.log(step);
    break;
  }
}
