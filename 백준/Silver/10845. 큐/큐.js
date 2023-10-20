const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");
const N = parseInt(input.shift());
const que = [];
const answer = [];
for (let i = 0; i < N; i++) {
  const command = input[i].trim();
  if (command.startsWith("push")) {
    const X = parseInt(command.split(" ")[1]);
    que.push(X);
  } else if (command === "pop") {
    if (que.length === 0) {
      answer.push(-1);
    } else {
      const X = que.shift();
      answer.push(X);
    }
  } else if (command === "size") {
    answer.push(que.length);
  } else if (command === "empty") {
    if (que.length === 0) {
      answer.push(1);
    } else {
      answer.push(0);
    }
  } else if (command === "front") {
    if (que.length === 0) {
      answer.push(-1);
    } else {
      answer.push(que[0]);
    }
  } else if (command === "back") {
    if (que.length === 0) {
      answer.push(-1);
    } else {
      answer.push(que[que.length - 1]);
    }
  }
}
console.log(answer.join("\n"));
