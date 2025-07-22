const input = require("fs").readFileSync(0).toString().trim();

const N = BigInt(input);

const solution = () => {
  const nStrLength = input.length;
  const maxDigitSum = BigInt(9 * nStrLength);
  const startSearch = N - maxDigitSum;

  for (let i = startSearch > 0n ? startSearch : 1n; i < N; i++) {
    const iStr = i.toString();
    let sum = 0n;
    for (const char of iStr) {
      sum += BigInt(char);
    }
    if (i + sum === N) return i;
  }

  return 0;
};

const result = solution();
console.log(result.toString());
