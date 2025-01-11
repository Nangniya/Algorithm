const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

class Queue {
  constructor() {
    this.queue = [];
    this.tail = 0;
    this.head = 0;
  }

  push(v) {
    this.queue[this.tail++] = v;
  }

  pop() {
    return this.empty() ? -1 : this.queue[this.head++];
  }

  size() {
    return this.tail - this.head;
  }

  empty() {
    return this.size() === 0 ? 1 : 0;
  }

  front() {
    return this.empty() ? -1 : this.queue[this.head];
  }

  back() {
    return this.empty() ? -1 : this.queue[this.tail - 1];
  }
}

const test = input.slice(1);
const N = Number(input[0]);
const answer = [];

const queue = new Queue();

for (let order of test) {
  const [str, n] = order.split(" ");
  if (str === "push") queue.push(Number(n));
  if (str === "pop") answer.push(queue.pop());
  if (str === "size") answer.push(queue.size());
  if (str === "empty") answer.push(queue.empty());
  if (str === "front") answer.push(queue.front());
  if (str === "back") answer.push(queue.back());
}

console.log(answer.join("\n"));
