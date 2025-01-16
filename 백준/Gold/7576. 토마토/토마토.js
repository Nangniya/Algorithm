const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [M, N] = input[0].split(" ").map(Number);
const map = input.slice(1).map((arr) => arr.split(" ").map(Number));

map.forEach((row, i) => {
  row.forEach((cell, j) => {
    if (cell === 1) {
      startX = j;
      startY = i;
    }
  });
});

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

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

const q = new Queue();

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] === 1) q.push([j, i, 0]);
  }
}

let maxDay = 0;

while (!q.empty()) {
  const [x, y, day] = q.pop();
  maxDay = Math.max(maxDay, day);

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || nx >= M || ny < 0 || ny >= N) continue;

    if (map[ny][nx] === 0) {
      map[ny][nx] = 1;
      q.push([nx, ny, day + 1]);
    }
  }
}

let hasUnripe = false;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] === 0) {
      hasUnripe = true;
      break;
    }
  }
}

console.log(hasUnripe ? -1 : maxDay);
