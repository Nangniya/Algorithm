const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const N = Number(input[0]);
const answer = [];

const getGCD = (a, b) => {
  while (b > 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const getLCM = (a, b) => {
  return (a * b) / getGCD(a, b);
};

for (let i = 1; i <= N; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  answer.push(getLCM(a, b));
}

console.log(answer.join("\n"));
