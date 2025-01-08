const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const set = new Set();

for (let i = 1; i <= N; i++) {
  const [name, value] = input[i].split(" ").map((v) => v.trim());
  if (value === "enter") {
    set.add(name);
  } else {
    set.delete(name);
  }
}

const answer = [...set].sort((a, b) => (a > b ? -1 : 1));

console.log(answer.join("\n"));