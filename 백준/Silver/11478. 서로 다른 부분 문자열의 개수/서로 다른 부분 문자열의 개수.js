const input = require("fs").readFileSync(0).toString().trim();

const set = new Set();

for (let i = 0; i < input.length; i++) {
  // 1부터 남은 길이까지
  for (let j = 1; j <= input.length - i; j++) {
    const substring = input.slice(i, i + j);
    set.add(substring);
  }
}

console.log(set.size);