const [N, K] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

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

const bfs = (start, target) => {
  const q = new Queue();
  const visited = new Array(100001).fill(-1);

  q.push(start);
  visited[start] = 0;

  while (!q.empty()) {
    const current = q.pop();

    if (current === target) return visited[current];

    const next = [current - 1, current + 1, current * 2];

    for (const nx of next) {
      if (nx >= 0 && nx <= 100000 && visited[nx] === -1) {
        visited[nx] = visited[current] + 1;
        q.push(nx);
      }
    }
  }
};

console.log(bfs(N, K));
