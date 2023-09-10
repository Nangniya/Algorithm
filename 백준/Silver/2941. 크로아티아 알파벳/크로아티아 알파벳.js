const input = require("fs").readFileSync(0).toString().trim();

const list = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
let answer = 0;
let index = 0;

while (index < input.length) {
  let found = false;
  for (const rule of list) {
    if (input.startsWith(rule, index)) {
      answer += 1;
      index += rule.length;
      found = true;
      break;
    }
  }
  if (!found) {
    answer += 1;
    index += 1;
  }
}

console.log(answer);
