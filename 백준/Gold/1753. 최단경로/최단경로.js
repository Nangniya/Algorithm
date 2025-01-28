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
    if (this.heap.length === 0) return null;
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

      if (this.heap[parentIndex][0] <= this.heap[index][0]) break;

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
        this.heap[index][0] <= this.heap[smallerChild][0]
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

const [V, E] = input[0].split(" ").map(Number);
const S = Number(input[1]);
const graph = Array.from({ length: V + 1 }, () => []);

for (let i = 2; i < input.length; i++) {
  const [start, end, w] = input[i].split(" ").map(Number);
  graph[start].push([end, w]);
}

const DIST = Array(V + 1).fill(Infinity);
DIST[S] = 0;

// 우선순위 큐
const pq = new MinHeap();
pq.push([0, S]); // [거리, 정점]

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

console.log(
  DIST.slice(1)
    .map((v) => (v === Infinity ? "INF" : v))
    .join("\n")
);
