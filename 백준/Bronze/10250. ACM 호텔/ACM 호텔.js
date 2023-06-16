let input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");
const T = Number(input.shift());
const answer = [];
for (let i = 0; i < T; i++) {
  const [H, W, N] = input[i].split(" ").map(Number);
  const tail = Math.ceil(N / H);
  const head = N - (tail - 1) * H;
  const address = head * 100 + tail;
  answer.push(address);
}
console.log(answer.join("\n"));
