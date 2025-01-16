const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const N = Number(input[0]);
const TC = [];

for (let i = 1; i < input.length; i += 3) {
  // 체스크기, 현재위치, 목표위치
  TC.push([Number(input[i]), input[i + 1], input[i + 2]]);
}

class Q {
  constructor() {
    this.queue = [];
    this.head = 0;
    this.tail = 0;
  }

  push(item) {
    this.queue[this.tail++] = item;
  }

  pop() {
    return this.queue[this.head++];
  }

  empty() {
    return this.head === this.tail;
  }
}

const dx = [2, 1, -1, -2, 2, 1, -1, -2];
const dy = [-1, -2, -2, -1, 1, 2, 2, 1];

const bfs = (i) => {
  const q = new Q();
  const N = TC[i][0];
  const [startX, startY] = TC[i][1].split(" ").map(Number);
  const [targetX, targetY] = TC[i][2].split(" ").map(Number);

  if (startX === targetX && startY === targetY) return 0;

  const map = Array.from({ length: N }, () => Array(N).fill(-1));

  q.push([startX, startY]);
  map[startY][startX] = 0;

  while (!q.empty()) {
    const [x, y] = q.pop();

    for (let i = 0; i < 8; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;

      if (map[ny][nx] === -1) {
        if (ny === targetY && nx === targetX) return map[y][x] + 1;
        map[ny][nx] = map[y][x] + 1;
        q.push([nx, ny]);
      }
    }
  }
};

const answer = [];

for (let i = 0; i < N; i++) {
  answer.push(bfs(i));
}

console.log(answer.join("\n"));
