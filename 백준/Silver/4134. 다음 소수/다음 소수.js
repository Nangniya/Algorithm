const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const isPrime = (num) => {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const answer = [];

for (let i = 1; i < input.length; i++) {
  const N = Number(input[i]);
  let cur = N;
  while (true) {
    if (isPrime(cur)) {
      answer.push(cur);
      break;
    }
    cur++;
  }
}

console.log(answer.join("\n"));
