const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const answer = Array.from({ length: N }, () => []);

for (let i = 0; i < N; i++) {
  const arr1 = input[i].split(" ").map(Number);
  const arr2 = input[i + N].split(" ").map(Number);

  for (let j = 0; j < M; j++) {
    answer[i].push(arr1[j] + arr2[j]);
  }
}

console.log(answer.map((row) => row.join(" ")).join("\n"));
