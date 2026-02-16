const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const T = Number(input[0]);

class Heap {
  constructor(comparator) {
    this.heap = [];
    this.comparator = comparator;
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

      if (this.comparator(this.heap[parentIndex], this.heap[index]) <= 0) break;

      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  bubbleDown() {
    let index = 0;

    while (index * 2 + 1 < this.heap.length) {
      let child = index * 2 + 1;

      if (child + 1 < this.heap.length && this.comparator(this.heap[child + 1], this.heap[child]) < 0) {
        child = child + 1;
      }

      if (this.comparator(this.heap[index], this.heap[child]) <= 0) break;

      this.swap(index, child);
      index = child;
    }
  }

  isEmpty() {
    return this.heap.length <= 0;
  }

  size() {
    return this.heap.length;
  }

  pick() {
    return this.isEmpty() ? null : this.heap[0];
  }
}

let inputIdx = 1;
function solution() {
  const N = input[inputIdx++];
  const row = Math.ceil(N / 10);
  const numbers = [];
  input.slice(inputIdx, inputIdx + row).forEach((line) => numbers.push(...line.split(" ").map(Number)));
  inputIdx += row;

  const minHeap = new Heap((a, b) => a - b);
  const maxHeap = new Heap((a, b) => b - a);
  const medians = Array.from({ length: row }, () => []);

  for (let i = 0; i < N; i++) {
    const num = numbers[i];
    if (maxHeap.size() <= minHeap.size()) maxHeap.push(num);
    else minHeap.push(num);

    if (!minHeap.isEmpty() && minHeap.pick() < maxHeap.pick()) {
      const minTop = minHeap.pop();
      const maxTop = maxHeap.pop();
      minHeap.push(maxTop);
      maxHeap.push(minTop);
    }

    if (i % 2 === 0) medians[Math.floor(i / 10)].push(maxHeap.pick());
  }

  return `${Math.floor(N / 2) + 1}\n${medians.map((row) => row.join(" ")).join("\n")}`;
}

for (let i = 0; i < T; i++) {
  console.log(solution());
}
