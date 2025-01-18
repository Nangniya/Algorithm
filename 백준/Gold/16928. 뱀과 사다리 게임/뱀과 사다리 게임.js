class Queue {
  constructor() {
    this.queue = [];
    this.head = 0;
    this.tail = 0;
  }

  push(item) {
    this.queue[this.tail++] = item;
  }

  pop() {
    return this.queue[this.head++];
  }

  isEmpty() {
    return this.head === this.tail;
  }
}

const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [N, M] = input[0].split(" ").map(Number);
const ladder = input.slice(1, N + 1).map((v) => v.split(" ").map(Number));
const snake = input.slice(N + 1).map((v) => v.split(" ").map(Number));

const q = new Queue();
q.push([1, 0]); // 위치, count

const moveMap = new Map();
ladder.forEach(([x, y]) => moveMap.set(x, y));
snake.forEach(([u, v]) => moveMap.set(u, v));
const visited = Array(101).fill(false);

let answer = 0;

while (!q.isEmpty()) {
  const [cur, count] = q.pop();

  if (cur === 100) {
    answer = count;
    break;
  }

  for (let dice = 1; dice <= 6; dice++) {
    let next = cur + dice;

    if (next > 100) continue;
    if (moveMap.has(next)) next = moveMap.get(next);
    if (!visited[next]) {
      visited[next] = true;
      q.push([next, count + 1]);
    }
  }
}

console.log(answer);
