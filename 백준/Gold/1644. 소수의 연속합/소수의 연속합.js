const input = require("fs").readFileSync(0).toString().trim();
const N = Number(input);

const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

const primes = [];

for (let i = 1; i <= N; i++) {
  if (isPrime(i)) primes.push(i);
}

let left = (right = sum = answer = 0);

while (left <= N && right <= N) {
  if (sum === N) {
    answer++;
    sum += primes[right++];
  } else if (sum < N) {
    sum += primes[right++];
  } else {
    sum -= primes[left++];
  }
}

console.log(answer);
