const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const test = input.slice(1);

class Deque {
  constructor() {
    this.data = {};
    this.head = 0;
    this.tail = 0;
  }

  pushBack(value) {
    this.data[this.tail] = value;
    this.tail++;
  }

  pushFront(value) {
    this.head--;
    this.data[this.head] = value;
  }

  popBack() {
    if (this.empty()) return -1;
    this.tail--;
    const value = this.data[this.tail];
    delete this.data[this.tail];
    return value;
  }

  popFront() {
    if (this.empty()) return -1;
    const value = this.data[this.head];
    delete this.data[this.head];
    this.head++;
    return value;
  }

  size() {
    return this.tail - this.head;
  }

  empty() {
    return this.size() === 0;
  }

  front() {
    if (this.empty()) return -1;
    return this.data[this.head];
  }

  back() {
    if (this.empty()) return -1;
    return this.data[this.tail - 1];
  }
}

const deque = new Deque();
const answer = [];

for (let n of test) {
  const [order, x] = n.split(" ").map(Number);
  if (order === 1) deque.pushFront(x);
  if (order === 2) deque.pushBack(x);
  if (order === 3) answer.push(deque.popFront());
  if (order === 4) answer.push(deque.popBack());
  if (order === 5) answer.push(deque.size());
  if (order === 6) answer.push(deque.empty() ? 1 : 0);
  if (order === 7) answer.push(deque.front());
  if (order === 8) answer.push(deque.back());
}

console.log(answer.join("\n"));
