const [A, B] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

const answer = [];

for (let i = A; i <= B; i++) {
  if (isPrime(i)) answer.push(i);
}

console.log(answer.join("\n"));
