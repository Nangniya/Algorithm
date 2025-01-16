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

graph.forEach((arr) => arr.sort((a, b) => a - b));

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

const bfs = () => {
  const visited = new Array(N + 1).fill(false);
  const answer = [R];

  const queue = new Queue();
  visited[R] = true;
  queue.push(R);

  while (!queue.empty()) {
    const node = queue.pop();

    for (const next of graph[node]) {
      if (!visited[next]) {
        visited[next] = true;
        answer.push(next);
        queue.push(next);
      }
    }
  }

  return answer.join(" ");
};

const visited = new Array(N + 1).fill(false);
const answer = [];

const dfs = (node) => {
  visited[node] = true;
  answer.push(node);

  for (const next of graph[node]) {
    if (!visited[next]) dfs(next);
  }
};

dfs(R);

console.log(answer.join(" ") + "\n" + bfs());
