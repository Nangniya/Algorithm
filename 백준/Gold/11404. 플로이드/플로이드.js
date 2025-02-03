const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const N = Number(input[0]);
const M = Number(input[1]);
const graph = Array.from({ length: N + 1 }, () => Array(N + 1).fill(Infinity));

for (let i = 1; i <= N; i++) {
  graph[i][i] = 0;
}

for (let i = 2; i < input.length; i++) {
  const [A, B, C] = input[i].split(" ").map(Number);
  graph[A][B] = Math.min(graph[A][B], C);
}

for (let k = 1; k <= N; k++) {
  // 거쳐 갈 노드 k
  for (let i = 1; i <= N; i++) {
    // 출발 노드 i
    for (let j = 1; j <= N; j++) {
      // 도착 노드 j
      graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
    }
  }
}

console.log(
  graph
    .slice(1)
    .map((arr) =>
      arr
        .slice(1)
        .map((v) => (v === Infinity ? "0" : v))
        .join(" ")
    )
    .join("\n")
);
