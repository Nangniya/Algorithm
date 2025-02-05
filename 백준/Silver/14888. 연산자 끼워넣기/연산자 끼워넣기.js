const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const N = Number(input[0]);
const NUMS = input[1].split(" ").map(Number);
const calcs = input[2].split(" ").map(Number);
const CALCS = [];

for (let i = 0; i < 4; i++) {
  if (i === 0) CALCS.push(..."+".repeat(calcs[i]).split(""));
  if (i === 1) CALCS.push(..."-".repeat(calcs[i]).split(""));
  if (i === 2) CALCS.push(..."*".repeat(calcs[i]).split(""));
  if (i === 3) CALCS.push(..."/".repeat(calcs[i]).split(""));
}

const permutations = (arr, n) => {
  if (n === 1) return [[]];

  const result = [];
  arr.forEach((fixed, idx) => {
    const rest = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
    const perms = permutations(rest, n - 1);
    const combine = perms.map((p) => [fixed, ...p]);
    result.push(...combine);
  });

  return result;
};

const calculate = (a, operator, b) => {
  if (operator === "+") return a + b;
  if (operator === "-") return a - b;
  if (operator === "*") return a * b;
  if (operator === "/") return a < 0 ? -Math.floor(-a / b) : Math.floor(a / b);
};

let max = -Infinity;
let min = Infinity;

const backtrack = (depth, value, usedOperators) => {
  if (depth === N - 1) {
    max = Math.max(max, value);
    min = Math.min(min, value);
    return;
  }

  for (let i = 0; i < CALCS.length; i++) {
    if (!usedOperators[i]) {
      usedOperators[i] = true;
      const nextValue = calculate(value, CALCS[i], NUMS[depth + 1]);
      backtrack(depth + 1, nextValue, usedOperators);
      usedOperators[i] = false;
    }
  }
};

backtrack(0, NUMS[0], Array(CALCS.length).fill(false));

console.log([max, min].join("\n"));
