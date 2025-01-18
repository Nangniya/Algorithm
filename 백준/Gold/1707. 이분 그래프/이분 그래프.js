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

const T = Number(input[0]);
const graphs = Array(T);

let border = [0, 1];

for (let i = 1; i < input.length; i++) {
  if (i === border[1]) {
    const [N, K] = input[i].split(" ").map(Number);
    graphs[border[0]++] = Array.from({ length: N + 1 }, () => []);
    border[1] += K + 1;
  } else {
    const [a, b] = input[i].split(" ").map(Number);
    graphs[border[0] - 1][a].push(b);
    graphs[border[0] - 1][b].push(a);
  }
}

const answer = [];

for (const graph of graphs) {
  const visited = Array(graph.length).fill(0); // 0: 미방문, 1: 그룹1, -1: 그룹2
  let isBipartite = true;

  for (let i = 1; i < graph.length; i++) {
    if (visited[i] === 0) {
      const q = new Queue();
      q.push(i);
      visited[i] = 1;

      while (!q.isEmpty() && isBipartite) {
        const cur = q.pop();

        for (const next of graph[cur]) {
          if (visited[next] === 0) {
            visited[next] = -visited[cur];
            q.push(next);
          } else if (visited[next] === visited[cur]) {
            isBipartite = false;
            break;
          }
        }
      }
    }
  }
  answer.push(isBipartite ? "YES" : "NO");
}

console.log(answer.join("\n"));
