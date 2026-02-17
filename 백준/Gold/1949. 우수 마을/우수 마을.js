const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const N = Number(input[0]);
const population = input[1].split(" ").map(Number);
const edges = input.slice(2).map((line) => line.split(" ").map(Number));
population.unshift(0);

const adj = Array.from({ length: N + 1 }, () => []);

for (const [u, v] of edges) {
  adj[u].push(v);
  adj[v].push(u);
}

// dp[node][0] = node가 우수 마을이 아닐 때 최댓값
// dp[node][1] = node가 우수 마을일 때 최댓값
const dp = Array.from({ length: N + 1 }, () => Array(2).fill(0));
const visited = Array(N + 1).fill(false);

function dfs(node) {
  visited[node] = true;
  dp[node][1] += population[node]; // Botton-Up 방식. 맨 마지막 노드부터 채워진다.

  for (const neighbor of adj[node]) {
    if (!visited[neighbor]) {
      dfs(neighbor); // 여기서 dfs를 하면 Botton-Up 방식으로 dfs함수의 맨 첫번째가 실행된다.
      dp[node][0] += Math.max(dp[neighbor][0], dp[neighbor][1]);
      dp[node][1] += dp[neighbor][0];
    }
  }
}

dfs(1);
console.log(Math.max(dp[1][0], dp[1][1]));
