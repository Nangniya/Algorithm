class CircularQueue {
  constructor(capacity) {
    this.queue = new Array(capacity);
    this.head = 0;
    this.tail = 0;
    this.size = 0;
    this.capacity = capacity;
  }

  push(item) {
    this.queue[this.tail] = item;
    this.tail = (this.tail + 1) % this.capacity;
    this.size++;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.queue[this.head];
    this.head = (this.head + 1) % this.capacity;
    this.size--;
    return item;
  }

  isEmpty() {
    return this.size === 0;
  }
}

const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ");

const [N, K] = [parseInt(input[0]), parseInt(input[1])];

const queue = new CircularQueue(N);
for (let i = 1; i <= N; i++) {
  queue.push(i);
}

const answer = [];

while (!queue.isEmpty()) {
  for (let i = 0; i < K - 1; i++) {
    queue.push(queue.pop());
  }
  answer.push(queue.pop());
}

console.log("<" + answer.join(", ") + ">");
