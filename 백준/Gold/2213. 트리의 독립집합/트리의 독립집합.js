const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const N = Number(input[0]);
const weight = input[1].split(" ").map(Number);
weight.unshift(0);
const edges = input.slice(2).map((line) => line.split(" ").map(Number));

const adj = Array.from({ length: N + 1 }, () => []);
for (const [u, v] of edges) {
  adj[u].push(v);
  adj[v].push(u);
}

// [node 미포함, node 포함]
const dp = Array.from({ length: N + 1 }, () => Array(2).fill(0));
const visited = Array(N + 1).fill(false);

function dfs(node) {
  visited[node] = true;
  dp[node][1] += weight[node];

  for (const neighbor of adj[node]) {
    if (!visited[neighbor]) {
      dfs(neighbor);
      dp[node][0] += Math.max(dp[neighbor][0], dp[neighbor][1]);
      dp[node][1] += dp[neighbor][0];
    }
  }
}

dfs(1);
console.log(Math.max(dp[1][0], dp[1][1]));

const nodes = [];
function backtrack(node, included, parent) {
  if (included) {
    nodes.push(node);
    for (const neighbor of adj[node]) {
      if (neighbor !== parent) backtrack(neighbor, 0, node);
    }
  } else {
    for (const neighbor of adj[node]) {
      if (neighbor !== parent) backtrack(neighbor, dp[neighbor][0] < dp[neighbor][1], node);
    }
  }
}

const isRootIncluded = dp[1][0] < dp[1][1];
backtrack(1, isRootIncluded, 0);
console.log(nodes.sort((a, b) => a - b).join(" "));
