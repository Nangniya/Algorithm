const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());
const [N, array] = [Number(input[0]), input[1].split(" ").map(Number)];

const answer = Array(N).fill(-1);
const stack = [];
stack.push({ num: array[0], idx: 0 });

for (let i = 1; i < N; i++) {
  const cur = array[i];
  if (stack.length > 0 && stack[stack.length - 1].num < cur) {
    while (stack.length > 0) {
      if (stack[stack.length - 1].num < cur) {
        answer[stack[stack.length - 1].idx] = cur;
        stack.pop();
      } else {
        break;
      }
    }
  }
  stack.push({ num: cur, idx: i });
}

console.log(answer.join(" "));
