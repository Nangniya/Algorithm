const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const graph = Array.from(Array(N + 1), () => []);
const answer = Array(M).fill(0);

for (let i = 1; i < N; i++) {
  const [start, end, dist] = input[i].split(" ").map(Number);
  graph[start].push([end, dist]);
  graph[end].push([start, dist]); // 양방향 그래프로 표현
}

for (let i = N; i < input.length; i++) {
  const [start, end] = input[i].split(" ").map(Number);
  const visited = Array(N + 1).fill(false);
  answer[i - N] = dfs(start, end, 0, visited);
}

function dfs(start, end, count, visited) {
  if (start === end) {
    return count;
  }

  visited[start] = true;

  for (const [node, dist] of graph[start]) {
    if (!visited[node]) {
      const result = dfs(node, end, count + dist, visited);
      if (result !== -1) {
        return result;
      }
    }
  }

  return -1;
}

console.log(answer.join("\n"));