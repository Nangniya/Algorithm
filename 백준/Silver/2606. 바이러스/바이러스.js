const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");
const NodeN = Number(input[0]);
const connectedN = Number(input[1]);
const graph = Array.from(Array(NodeN + 1), () => []);
const visited = Array(NodeN + 1).fill(false);

for (let i = 2; i < input.length; i++) {
  const [start, end] = input[i].split(" ");
  graph[Number(start)].push(Number(end));
  graph[Number(end)].push(Number(start));
}

function dfs(graph, v, visited) {
  visited[v] = true;
  for (i of graph[v]) {
    if (!visited[i]) {
      dfs(graph, i, visited);
    }
  }
}

dfs(graph, 1, visited);

console.log(visited.filter((a) => a === true).length - 1);