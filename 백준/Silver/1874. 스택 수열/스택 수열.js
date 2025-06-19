const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim())
  .map(Number);
const [N, array] = [input[0], input.slice(1)];

function solution() {
  const answer = [];
  const stack = [];
  let [curNum, curIdx] = [1, 0];

  while (curIdx < N) {
    if (stack[stack.length - 1] === array[curIdx]) {
      answer.push("-");
      stack.pop();
      curIdx++;
    } else {
      stack.push(curNum);
      answer.push("+");
      curNum++;
    }
    if (stack.length > 0 && array[curIdx] < stack[stack.length - 1]) {
      return "NO";
    }
  }
  return answer.join("\n");
}

console.log(solution());
