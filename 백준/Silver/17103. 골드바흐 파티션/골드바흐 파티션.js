const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const test = input.slice(1).map(Number);
const primes = [];
const primeSet = new Set();

const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

const maxNum = Math.max(...test);
for (let i = 2; i <= maxNum; i++) {
  if (isPrime(i)) {
    primes.push(i);
    primeSet.add(i);
  }
}

const answer = test.map((N) => {
  let count = 0;

  for (let i = 0; primes[i] <= N / 2; i++) {
    if (primeSet.has(N - primes[i])) count++;
  }

  return count;
});

console.log(answer.join("\n"));
