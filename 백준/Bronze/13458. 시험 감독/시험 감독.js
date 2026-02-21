const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const N = Number(input[0]);
const students = input[1].split(" ").map(Number);
const [B, C] = input[2].split(" ").map(Number);

let answer = 0;

for (const student of students) {
  let remain = student;
  remain -= B;
  answer++;
  if (remain > 0) {
    const t = Math.ceil(remain / C);
    answer += t;
  }
}
console.log(answer);
