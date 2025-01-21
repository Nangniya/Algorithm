const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const N = Number(input[0]);

const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i < input.length; i++) {
  const [parent, child, w] = input[i].split(" ").map(Number);
  graph[parent].push([child, w]);
  graph[child].push([parent, w]);
}

const findFarthestNode = (start) => {
  const visited = Array(N + 1).fill(-1);
  visited[start] = 0;
  let maxDist = 0;
  let maxNode = start;

  const dfs = (node, dist) => {
    if (dist > maxDist) {
      maxDist = dist;
      maxNode = node;
    }

    for (const [next, w] of graph[node]) {
      if (visited[next] === -1) {
        visited[next] = dist + w;
        dfs(next, dist + w);
      }
    }
  };

  dfs(start, 0);
  return [maxNode, maxDist];
};

const [farthestNode] = findFarthestNode(1);
const [, answer] = findFarthestNode(farthestNode);

console.log(answer);
