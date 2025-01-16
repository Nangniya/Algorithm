const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [M, N, H] = input[0].split(" ").map(Number);
const map = Array.from({ length: H }, (_, h) =>
  input
    .slice(1 + h * N, 1 + (h + 1) * N)
    .map((row) => row.split(" ").map(Number))
);

class Queue {
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

const dx = [1, -1, 0, 0, 0, 0];
const dy = [0, 0, 1, -1, 0, 0];
const dz = [0, 0, 0, 0, 1, -1];

const q = new Queue();

for (let h = 0; h < H; h++) {
  for (let n = 0; n < N; n++) {
    for (let m = 0; m < M; m++) {
      if (map[h][n][m] === 1) {
        q.push([m, n, h, 0]); // x, y, z, 날짜
      }
    }
  }
}

let maxDay = 0;

while (!q.empty()) {
  const [x, y, z, day] = q.pop();
  maxDay = Math.max(maxDay, day);

  for (let i = 0; i < 6; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    const nz = z + dz[i];

    if (nx < 0 || nx >= M || ny < 0 || ny >= N || nz < 0 || nz >= H) continue;

    if (map[nz][ny][nx] === 0) {
      map[nz][ny][nx] = 1;
      q.push([nx, ny, nz, day + 1]);
    }
  }
}

let hasUnripe = false;
for (let h = 0; h < H; h++) {
  for (let n = 0; n < N; n++) {
    for (let m = 0; m < M; m++) {
      if (map[h][n][m] === 0) {
        hasUnripe = true;
        break;
      }
    }
  }
}

console.log(hasUnripe ? -1 : maxDay);
