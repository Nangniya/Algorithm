class MaxHeap {
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

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return max;
  }

  bubbleUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (this.heap[parentIndex] >= this.heap[index]) break;

      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  bubbleDown() {
    let index = 0;

    while (index < this.heap.length) {
      const leftChild = index * 2 + 1;
      const rightChild = index * 2 + 2;
      const largerChild =
        this.heap[rightChild] && this.heap[rightChild] > this.heap[leftChild]
          ? rightChild
          : leftChild;

      if (!this.heap[leftChild] || this.heap[index] >= this.heap[largerChild])
        break;

      this.swap(index, largerChild);
      index = largerChild;
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
  .map(Number);

const pq = new MaxHeap();
const answer = [];

for (let i = 1; i < input.length; i++) {
  const V = input[i];
  if (V === 0) {
    answer.push(pq.pop());
  } else {
    pq.push(V);
  }
}

console.log(answer.join("\n"));
