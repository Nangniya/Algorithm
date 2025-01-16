const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [N, M] = input[0].split(" ").map(Number);
const map = input.slice(1).map((line) => line.split("").map(Number));

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

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

const bfs = (startX, startY) => {
  const queue = new Queue();
  queue.push([startX, startY]);

  const dist = Array.from({ length: N }, () => Array(M).fill(-1));
  dist[startX][startY] = 1;

  while (!queue.empty()) {
    const [x, y] = queue.pop();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;

      if (map[nx][ny] === 1 && dist[nx][ny] === -1) {
        dist[nx][ny] = (dist[x][y] || 0) + 1;
        queue.push([nx, ny]);
      }
    }
  }

  return dist[N - 1][M - 1];
};

console.log(bfs(0, 0));
