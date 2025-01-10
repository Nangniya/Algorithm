const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const test = input.slice(0, input.length - 1).map(Number);

const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

const answer = [];

for (let N of test) {
  let count = 0;
  for (let i = N + 1; i <= 2 * N; i++) {
    if (isPrime(i)) count++;
  }
  answer.push(count);
}

console.log(answer.join("\n"));
