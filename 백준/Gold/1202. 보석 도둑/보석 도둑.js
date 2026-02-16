const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);

const jewelries = input.slice(1, N + 1).map((line) => line.split(" ").map(Number));
const bags = input.slice(N + 1).map(Number);

jewelries.sort((a, b) => a[0] - b[0]); // 무게 오름차순 정렬 [무게, 가격]
bags.sort((a, b) => a - b); // 무게 오름차순 정렬

class MaxHeap {
  constructor() {
    this.heap = [];
  }
  push(item) {
    this.heap.push(item);
    this.bubbleUp();
  }
  pop() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return max;
  }
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
  bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (this.heap[index][1] <= this.heap[parent][1]) break;
      this.swap(index, parent);
      index = parent;
    }
  }
  bubbleDown() {
    let index = 0;
    while (index * 2 + 1 < this.heap.length) {
      let largerChild = index * 2 + 1;
      let rightChild = index * 2 + 2;

      if (rightChild < this.heap.length && this.heap[rightChild][1] > this.heap[largerChild][1]) {
        largerChild = rightChild;
      }

      if (this.heap[index][1] >= this.heap[largerChild][1]) break;
      this.swap(index, largerChild);
      index = largerChild;
    }
  }
}
const maxHeap = new MaxHeap();
let jewelriesIndex = 0;
let answer = 0;

for (const weight of bags) {
  while (jewelriesIndex < jewelries.length && jewelries[jewelriesIndex][0] <= weight) {
    maxHeap.push(jewelries[jewelriesIndex]);
    jewelriesIndex++;
  }
  if (maxHeap.heap.length > 0) answer += maxHeap.pop()[1];
}

console.log(answer);
