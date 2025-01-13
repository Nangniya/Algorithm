const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const destructure = input[1].split(" ").map(Number);
const initial = input[2]
  .split(" ")
  .map(Number)
  .filter((_, i) => destructure[i] === 0);

const atoms = input[4].split(" ").map(Number);

const answer = [];

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
    this.tail--;
    const value = this.data[this.tail];
    delete this.data[this.tail];
    return value;
  }

  popFront() {
    const value = this.data[this.head];
    delete this.data[this.head];
    this.head++;
    return value;
  }
}

const deque = new Deque();

initial.forEach((v) => deque.pushFront(v));

for (let i = 0; i < atoms.length; i++) {
  deque.pushBack(atoms[i]);
  answer.push(deque.popFront());
}

console.log(answer.join(" "));
