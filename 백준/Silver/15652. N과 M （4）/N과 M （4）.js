const [N, M] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const permutationsWithRepetition = (arr, n) => {
  if (n === 0) return [[]];

  const result = [];
  arr.forEach((fixed, idx) => {
    const rest = arr.slice(idx);
    const perms = permutationsWithRepetition(rest, n - 1);
    const combine = perms.map((p) => [fixed, ...p]);
    result.push(...combine);
  });

  return result;
};

console.log(
  permutationsWithRepetition(
    Array.from({ length: N }, (_, i) => i + 1),
    M
  )
    .map((arr) => arr.join(" "))
    .sort()
    .join("\n")
);
