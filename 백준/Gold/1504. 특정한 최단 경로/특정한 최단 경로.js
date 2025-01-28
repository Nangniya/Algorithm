class MinHeap {
  constructor() {
    this.heap = [];
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  push(item) {
    this.heap.push(item);
    this.bubbleUp();
  }

  pop() {
    if (this.isEmpty()) return 0;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return min;
  }

  bubbleUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (this.heap[parentIndex][0] < this.heap[index][0]) break;

      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  bubbleDown() {
    let index = 0;

    while (index < this.heap.length) {
      const leftChild = index * 2 + 1;
      const rightChild = index * 2 + 2;
      const smallerChild =
        this.heap[rightChild] &&
        this.heap[rightChild][0] < this.heap[leftChild][0]
          ? rightChild
          : leftChild;

      if (
        !this.heap[leftChild] ||
        this.heap[index][0] < this.heap[smallerChild][0]
      )
        break;

      this.swap(index, smallerChild);
      index = smallerChild;
    }
  }

  isEmpty() {
    return this.heap.length <= 0;
  }
}

const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [N, E] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);
for (let i = 1; i <= E; i++) {
  const [start, end, w] = input[i].split(" ").map(Number);
  graph[start].push([end, w]);
  graph[end].push([start, w]);
}
const [M1, M2] = input[input.length - 1].split(" ").map(Number);

const dijkstra = (start, end) => {
  const DIST = Array(N + 1).fill(Infinity);
  const pq = new MinHeap();
  pq.push([0, start]); // [거리, 정점]
  DIST[start] = 0;

  while (!pq.isEmpty()) {
    const [dist, cur] = pq.pop();
    if (DIST[cur] < dist) continue;

    for (const [next, w] of graph[cur]) {
      const cost = dist + w;
      if (cost < DIST[next]) {
        DIST[next] = cost;
        pq.push([cost, next]);
      }
    }
  }

  return DIST[end];
};

const fromStartToM1 = dijkstra(1, M1);
const fromStartToM2 = dijkstra(1, M2);
const fromM1ToM2 = dijkstra(M1, M2);
const fromM2ToM1 = dijkstra(M2, M1);
const fromM2ToN = dijkstra(M2, N);
const fromM1ToN = dijkstra(M1, N);

const path1 = fromStartToM1 + fromM1ToM2 + fromM2ToN;
const path2 = fromStartToM2 + fromM2ToM1 + fromM1ToN;

console.log(Math.min(path1, path2) === Infinity ? -1 : Math.min(path1, path2));
