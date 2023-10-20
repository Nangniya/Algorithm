const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");
const N = parseInt(input.shift());
const deque = [];
const answer = [];
for (let i = 0; i < N; i++) {
  const command = input[i].trim();
  if (command.startsWith("push_front")) {
    const X = command.split(" ")[1];
    deque.unshift(X);
  } else if (command.startsWith("push_back")) {
    const X = command.split(" ")[1];
    deque.push(X);
  } else if (command === "pop_front") {
    if (deque.length === 0) {
      answer.push(-1);
    } else {
      answer.push(deque.shift());
    }
  } else if (command === "pop_back") {
    if (deque.length === 0) {
      answer.push(-1);
    } else {
      answer.push(deque.pop());
    }
  } else if (command === "size") {
    answer.push(deque.length);
  } else if (command === "empty") {
    if (deque.length === 0) {
      answer.push(1);
    } else {
      answer.push(0);
    }
  } else if (command === "front") {
    if (deque.length === 0) {
      answer.push(-1);
    } else {
      answer.push(deque[0]);
    }
  } else if (command === "back") {
    if (deque.length === 0) {
      answer.push(-1);
    } else {
      answer.push(deque[deque.length - 1]);
    }
  }
}
console.log(answer.join("\n"));
