const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [N, M] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= M; i++) {
  const [A, B, C] = input[i].split(" ").map(Number);
  graph[A].push([B, C]); // [도착 정점, 거리]
}

const solution = () => {
  const DIST = Array(N + 1).fill(Infinity);
  const PREV = Array(N + 1).fill(null);

  DIST[1] = 0;

  for (let temp = 0; temp < N - 1; temp++) {
    for (let u = 1; u <= N; u++) {
      for (const [v, w] of graph[u]) {
        if (DIST[u] + w < DIST[v]) {
          DIST[v] = DIST[u] + w;
          PREV[v] = u;
        }
      }
    }
  }

  for (let u = 1; u <= N; u++) {
    for (const [v, w] of graph[u]) {
      if (DIST[u] + w < DIST[v]) {
        return -1;
      }
    }
  }

  return DIST.slice(2)
    .map((v) => (v === Infinity ? -1 : v))
    .join("\n");
};

console.log(solution());
