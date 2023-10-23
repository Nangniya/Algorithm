const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ");
const [N, K] = input.map((a) => +a);
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  dequeue() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

let answer = "<";
let queue = new Queue();

for (let i = 1; i <= N; i++) {
  queue.enqueue(i);
}

while (queue.size > 1) {
  for (let i = 1; i < K; i++) {
    queue.enqueue(queue.dequeue());
  }
  answer += queue.dequeue() + ", ";
}

answer += queue.dequeue() + ">";
console.log(answer);
