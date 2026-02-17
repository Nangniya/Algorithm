const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [N, root, Q] = input[0].split(" ").map(Number);
const edges = input.slice(1, N).map((line) => line.split(" ").map(Number));
const queries = input.slice(N).map((line) => line.split(" ").map(Number));

const adj = Array.from({ length: N + 1 }, () => []);
const size = Array(N + 1).fill(0);

for (const [u, v] of edges) {
  adj[u].push(v);
  adj[v].push(u);
}

function dfs(node, parent) {
  size[node] = 1;

  for (const neighbor of adj[node]) {
    if (neighbor !== parent) {
      dfs(neighbor, node);
      size[node] += size[neighbor];
    }
  }
}

dfs(root, -1);
console.log(queries.map(([u]) => size[u]).join("\n"));
