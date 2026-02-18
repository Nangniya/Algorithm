const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

let N;
let adj;
let lineCount = -1;

rl.on("line", (line) => {
  lineCount++;
  if (lineCount === 0) {
    N = Number(line);
    adj = Array.from({ length: N + 1 }, () => []);
    return;
  }
  const [u, v, d] = line.split(" ").map(Number);
  adj[u].push([v, d]);
  adj[v].push([u, d]);
});

rl.on("close", () => {
  const subTreeSize = Array(N + 1).fill(0);
  const distSum = Array(N + 1).fill(0);
  const totalSum = Array(N + 1).fill(0);

  // 1. 서브트리 크기와 루트(1번) 기준 거리 합 구하기
  function getSubTrees(node, parent) {
    subTreeSize[node] = 1;
    for (const [neighbor, w] of adj[node]) {
      if (neighbor !== parent) {
        getSubTrees(neighbor, node);
        subTreeSize[node] += subTreeSize[neighbor];
        // 부모의 distSum은 자식들의 distSum + (자식 서브트리 노드 수 * 간선 가중치)
        distSum[node] += distSum[neighbor] + subTreeSize[neighbor] * w;
      }
    }
  }

  // 2. 부모의 totalSum을 이용해 자식의 totalSum 구하기 (Rerooting)
  function getAllDist(node, parent) {
    for (const [neighbor, w] of adj[node]) {
      if (neighbor !== parent) {
        // 공식: 부모 정답 - (가까워지는 거리) + (멀어지는 거리)
        totalSum[neighbor] = totalSum[node] - subTreeSize[neighbor] * w + (N - subTreeSize[neighbor]) * w;
        getAllDist(neighbor, node);
      }
    }
  }

  getSubTrees(1, -1);
  totalSum[1] = distSum[1];
  getAllDist(1, -1);

  console.log(totalSum.slice(1).join("\n"));
});
