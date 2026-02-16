const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

class MinHeap {
  constructor() {
    this.heap = [];
  }

  // 1. 구조 분해 할당 대신 temp 변수 사용 (컴파일/런타임 에러 방지)
  swap(a, b) {
    const temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
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
      const parentIndex = (index - 1) >> 1; // Math.floor 대신 비트 연산 (약간 더 빠름)
      if (this.heap[parentIndex] <= this.heap[index]) break;
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  bubbleDown() {
    let index = 0;
    const length = this.heap.length;
    while (true) {
      let leftChild = index * 2 + 1;
      let rightChild = index * 2 + 2;
      let smallerChild = index;

      if (leftChild < length && this.heap[leftChild] < this.heap[smallerChild]) {
        smallerChild = leftChild;
      }
      if (rightChild < length && this.heap[rightChild] < this.heap[smallerChild]) {
        smallerChild = rightChild;
      }

      if (smallerChild === index) break;
      this.swap(index, smallerChild);
      index = smallerChild;
    }
  }

  size() {
    return this.heap.length;
  }
}

const minHeap = new MinHeap();
let N = -1;

rl.on("line", (line) => {
  if (N === -1) {
    N = parseInt(line);
    return;
  }

  // 2. 숫자로 바꿀 때 + 연산자를 사용하여 속도 향상
  const nums = line.split(" ");
  for (let i = 0; i < nums.length; i++) {
    minHeap.push(+nums[i]);
    if (minHeap.size() > N) {
      minHeap.pop();
    }
  }
}).on("close", () => {
  // 최종 결과 출력
  process.stdout.write(minHeap.heap[0].toString() + "\n");
});