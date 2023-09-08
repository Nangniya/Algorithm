const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");
const N = input.shift();

let set = new Set(input);
const arr = [...set];
arr.sort((a, b) => {
  // 먼저 길이로 비교
  const lengthComparison = a.length - b.length;
  // 길이가 같으면 알파벳 순으로 비교
  if (lengthComparison === 0) {
    return a.localeCompare(b);
  }
  return lengthComparison;
});

console.log(arr.join("\n"));
