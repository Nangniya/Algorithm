const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const N = Number(input[0]);

const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i < input.length; i++) {
  const [V, ...rest] = input[i].split(" ").map(Number);

  for (let j = 0; j < rest.length - 1; j += 2) {
    graph[V].push([rest[j], rest[j + 1]]);
  }
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

// ※ 임의의 노드(1)에서 가장 먼 노드에서 가장 먼 노드까지의 거리가 트리의 지름이다! 
const [farthestNode] = findFarthestNode(1);
const [, answer] = findFarthestNode(farthestNode);

console.log(answer);
