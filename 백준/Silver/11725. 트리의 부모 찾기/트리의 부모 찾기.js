const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const N = parseInt(input[0]);
const graph = {};

for (let i = 1; i <= N; i++) {
  graph[i] = [];
}

for (let i = 1; i < N; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

const parents = new Array(N + 1).fill(0);

const dfs = (node) => {
  for (const child of graph[node]) {
    if (parents[child] === 0 && child !== 1) {
      parents[child] = node;
      dfs(child);
    }
  }
};

dfs(1);

console.log(parents.slice(2).join("\n"));
