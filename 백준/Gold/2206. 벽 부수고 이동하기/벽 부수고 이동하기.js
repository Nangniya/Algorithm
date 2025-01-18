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

  isEmpty() {
    return this.head === this.tail;
  }
}

const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [N, M] = input[0].split(" ").map(Number);
const map = input.slice(1).map((v) => v.split("").map(Number));
const visited = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => Array(2).fill(false))
);

const q = new Queue();
q.push([0, 0, 1, 0]); // x, y, dist, broken
visited[0][0][0] = true;

let answer = -1;

const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];

while (!q.isEmpty()) {
  const [x, y, dist, broken] = q.pop();

  if (y === N - 1 && x === M - 1) {
    answer = dist;
    break;
  }

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || nx >= M || ny < 0 || ny >= N) continue;

    if (map[ny][nx] === 1 && broken === 0) {
      if (!visited[ny][nx][1]) {
        visited[ny][nx][1] = true;
        q.push([nx, ny, dist + 1, 1]);
      }
    }

    if (map[ny][nx] === 0) {
      if (!visited[ny][nx][broken]) {
        visited[ny][nx][broken] = true;
        q.push([nx, ny, dist + 1, broken]);
      }
    }
  }
}

console.log(answer);
