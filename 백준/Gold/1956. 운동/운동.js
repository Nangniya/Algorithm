const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [V, E] = input[0].split(" ").map(Number);
const graph = Array.from({ length: V + 1 }, () => Array(V + 1).fill(Infinity));

for (let i = 1; i <= V; i++) {
  graph[i][i] = 0;
}

for (let i = 1; i <= E; i++) {
  const [A, B, C] = input[i].split(" ").map(Number);
  graph[A][B] = C;
}

for (let k = 1; k <= V; k++) {
  // 거쳐 갈 노드 k
  for (let i = 1; i <= V; i++) {
    // 출발 노드 i
    for (let j = 1; j <= V; j++) {
      // 도착 노드 j
      graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
    }
  }
}

let answer = Infinity;

for (let i = 1; i <= V; i++) {
  for (let j = 1; j <= V; j++) {
    if (i !== j) {
      answer = Math.min(answer, graph[i][j] + graph[j][i]);
    }
  }
}

console.log(answer === Infinity ? -1 : answer);
