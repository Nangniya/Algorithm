const [N, M] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const permutations = (arr, n) => {
  if (n === 0) return [[]];

  const result = [];
  arr.forEach((fixed, idx) => {
    const rest = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
    const perms = permutations(rest, n - 1);
    const combine = perms.map((p) => [fixed, ...p]);
    result.push(...combine);
  });

  return result;
};

console.log(
  permutations(
    Array.from({ length: N }, (_, i) => i + 1),
    M
  )
    .map((arr) => arr.join(" "))
    .sort()
    .join("\n")
);
