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

const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const T = Number(input[0]);
const answer = [];

const dijkstra = (start, graph, n) => {
  const DIST = Array(n + 1).fill(Infinity);
  const pq = new MinHeap();

  DIST[start] = 0;
  pq.push([0, start]); // [거리, 정점]

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

  return DIST;
};

let i = 1;

for (let tc = 0; tc < T; tc++) {
  const [n, m, t] = input[i].split(" ").map(Number);
  const [s, g, h] = input[i + 1].split(" ").map(Number);
  i += 2;

  const graph = Array.from({ length: n + 1 }, () => []);
  let GH_DIST = 0;

  for (let j = 0; j < m; j++) {
    const [a, b, d] = input[i + j].split(" ").map(Number);
    graph[a].push([b, d]);
    graph[b].push([a, d]);
    if ((a === g && b === h) || (a === h && b === g)) GH_DIST = d;
  }
  i += m;

  const ENDS = [];
  for (let j = 0; j < t; j++) {
    ENDS.push(Number(input[i + j]));
  }
  i += t;

  const fromSTo = dijkstra(s, graph, n);
  const fromGTo = dijkstra(g, graph, n);
  const fromHTo = dijkstra(h, graph, n);

  const result = [];
  for (const end of ENDS) {
    const path1 = fromSTo[g] + GH_DIST + fromHTo[end];
    const path2 = fromSTo[h] + GH_DIST + fromGTo[end];
    if (Math.min(path1, path2) === fromSTo[end] && fromSTo[end] !== Infinity)
      result.push(end);
  }

  answer.push(result.sort((a, b) => a - b).join(" "));
}

console.log(answer.join("\n"));
