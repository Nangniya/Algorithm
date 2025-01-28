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
    if (this.isEmpty()) return null;
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

const [N, K] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const move = (start) => [
  [1, start + 1],
  [1, start - 1],
  [0, 2 * start],
];

const dijkstra = () => {
  const DIST = Array(100001).fill(Infinity);
  const pq = new MinHeap();
  pq.push([0, N]); // [거리, 정점]
  DIST[N] = 0;

  while (!pq.isEmpty()) {
    const [dist, cur] = pq.pop();

    if (cur === K) return dist;
    if (DIST[cur] < dist) continue;

    for (const [w, next] of move(cur)) {
      const cost = dist + w;
      if (cost < DIST[next]) {
        DIST[next] = cost;
        pq.push([cost, next]);
      }
    }
  }
};

console.log(dijkstra());
