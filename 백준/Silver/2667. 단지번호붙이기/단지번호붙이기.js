const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const N = Number(input[0]);
const map = input.slice(1).map((line) => line.split("").map(Number));
const visited = Array.from({ length: N }, () => Array(N).fill(false));

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
  visited[startX][startY] = true;
  let count = 1;

  while (!queue.empty()) {
    const [x, y] = queue.pop();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;

      if (map[nx][ny] === 1 && !visited[nx][ny]) {
        visited[nx][ny] = true;
        queue.push([nx, ny]);
        count++;
      }
    }
  }

  return count;
};

const result = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === 1 && !visited[i][j]) result.push(bfs(i, j));
  }
}

console.log(result.length + "\n" + result.sort((a, b) => a - b).join("\n"));
