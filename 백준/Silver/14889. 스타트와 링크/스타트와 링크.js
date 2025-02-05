const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const N = Number(input[0]);
const SCORE = input.slice(1).map((arr) => arr.split(" ").map(Number));

const combinations = (arr, n) => {
  if (n === 1) return arr.map((v) => [v]);

  const result = [];
  arr.forEach((fixed, idx) => {
    const rest = arr.slice(idx + 1);
    const combis = combinations(rest, n - 1);
    const combine = combis.map((v) => [fixed, ...v]);
    result.push(...combine);
  });

  return result;
};

const COMBIS = combinations(
  Array.from({ length: N }, (_, i) => i),
  N / 2
);

const calculate = (arr) => {
  let score = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      score += SCORE[arr[i]][arr[j]] + SCORE[arr[j]][arr[i]];
    }
  }
  return score;
};

let minDiff = Infinity;

const backtrack = (depth) => {
  if (depth === Math.floor(COMBIS.length / 2)) return;

  const T1 = COMBIS[depth];
  const T2 = COMBIS[COMBIS.length - 1 - depth];

  const S1 = calculate(T1);
  const S2 = calculate(T2);

  const diff = Math.abs(S1 - S2);

  if (diff === 0) {
    minDiff = diff;
    return;
  }

  minDiff = Math.min(diff, minDiff);
  backtrack(depth + 1);
};

backtrack(0);

console.log(minDiff);
