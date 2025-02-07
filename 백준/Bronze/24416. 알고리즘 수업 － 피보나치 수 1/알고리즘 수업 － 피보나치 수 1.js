const input = require("fs").readFileSync(0).toString().trim();
const N = Number(input);

let recursionAnswer = 0;
const recursion = (n) => {
  if (n === 1 || n === 2) {
    recursionAnswer++;
    return 1;
  }
  return recursion(n - 1) + recursion(n - 2);
};

let dpAnswer = 0;
const dp = (n) => {
  const fib = [1, 1];
  for (let i = 2; i < N; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
    dpAnswer++;
  }
  return fib[n - 1];
};

recursion(N);
dp(N);

console.log(`${recursionAnswer} ${dpAnswer}`);
