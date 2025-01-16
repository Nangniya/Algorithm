const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [N, M, R] = input[0].split(" ").map(Number);

const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= M; i++) {
  const [u, v] = input[i].split(" ").map(Number);
  graph[u].push(v);
  graph[v].push(u);
}

graph.forEach((arr) => arr.sort((a, b) => b - a));

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

const visited = new Array(N + 1).fill(0);
let order = 1;

const queue = new Queue();
visited[R] = order++;
queue.push(R);

while (!queue.empty()) {
  const node = queue.pop();

  for (const next of graph[node]) {
    if (visited[next] === 0) {
      visited[next] = order++;
      queue.push(next);
    }
  }
}

console.log(visited.slice(1).join("\n"));
