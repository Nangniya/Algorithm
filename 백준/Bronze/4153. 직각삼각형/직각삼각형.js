const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const answer = [];

for (let a of input) {
  let values = a.split(" ").map((e) => parseInt(e));
  if (values[0] === 0) break;
  values.sort((a, b) => {
    return a - b;
  });
  if (values[0] * values[0] + values[1] * values[1] === values[2] * values[2]) {
    answer.push("right");
  } else {
    answer.push("wrong");
  }
}
console.log(answer.join("\n"));