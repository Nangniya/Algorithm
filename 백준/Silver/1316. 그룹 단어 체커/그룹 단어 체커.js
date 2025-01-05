const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
let answer = 0;

for (let str of input) {
  let prev = "";
  const set = new Set();
  let isGroup = true;
  for (let i = 0; i < str.length; i++) {
    prev = str[i === 0 ? 0 : i - 1];
    if (prev !== str[i] && set.has(str[i])) {
      isGroup = false;
      break;
    }
    set.add(str[i]);
  }
  if (isGroup) answer++;
}

console.log(answer);
