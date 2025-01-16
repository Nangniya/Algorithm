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
for (let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => b - a);
}

const visited = new Array(N + 1).fill(0);
let order = 1;

const dfs = (node) => {
  visited[node] = order++;

  for (const next of graph[node]) {
    if (visited[next] === 0) {
      dfs(next);
    }
  }
}

dfs(R);

console.log(visited.slice(1).join("\n"));
