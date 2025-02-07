const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());
const answer = [];

const DP = Array.from({ length: 101 }, () =>
  Array.from({ length: 101 }, () => Array(101).fill(null))
);

const w = (a, b, c) => {
  if (a <= 0 || b <= 0 || c <= 0) return 1;
  if (a > 20 || b > 20 || c > 20) return w(20, 20, 20);

  if (DP[a + 50][b + 50][c + 50] !== null) return DP[a + 50][b + 50][c + 50];

  if (a < b && b < c) {
    DP[a + 50][b + 50][c + 50] =
      w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c);
  } else {
    DP[a + 50][b + 50][c + 50] =
      w(a - 1, b, c) +
      w(a - 1, b - 1, c) +
      w(a - 1, b, c - 1) -
      w(a - 1, b - 1, c - 1);
  }

  return DP[a + 50][b + 50][c + 50];
};

input.slice(0, input.length - 1).forEach((arr) => {
  const [a, b, c] = arr.split(" ").map(Number);
  answer.push(`w(${a}, ${b}, ${c}) = ${w(a, b, c)}`);
});

console.log(answer.join("\n"));
