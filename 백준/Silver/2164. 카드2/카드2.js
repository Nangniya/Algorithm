const input = require("fs").readFileSync(0).toString().trim();

const N = Number(input);

class Queue {
  constructor() {
    this.queue = Array.from({ length: N }, (_, i) => i + 1);
    this.tail = N;
    this.head = 0;
  }

  push(v) {
    this.queue[this.tail++] = v;
  }

  pop() {
    return this.queue[this.head++];
  }

  empty() {
    return this.tail - this.head === 0;
  }
}

const queue = new Queue();

while (!queue.empty()) {
  const item = queue.pop();
  if (queue.empty()) {
    console.log(item);
  }
  queue.push(queue.pop());
}
