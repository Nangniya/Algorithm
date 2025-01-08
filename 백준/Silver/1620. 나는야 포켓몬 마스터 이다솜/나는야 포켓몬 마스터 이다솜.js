const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const [N, M] = input[0].split(" ").map(Number);
const arr = input.slice(1, N + 1);

const map = {};
arr.forEach((name, index) => {
  map[name] = index + 1;
});

const answer = [];
for (let i = N + 1; i < input.length; i++) {
  if (isNaN(Number(input[i]))) {
    answer.push(map[input[i]]);
  } else {
    answer.push(arr[input[i] - 1]);
  }
}

console.log(answer.join("\n"));
