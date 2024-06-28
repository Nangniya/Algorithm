const input = require("fs").readFileSync(0).toString().trim();
const arr = Array.from(Array(Number(input)), (_, i) => i + 1);
let answer = 0;

for (num of arr) {
  const str = String(num);
  if (str.length <= 2) {
    answer++;
  } else {
    if (Number(str[2]) - Number(str[1]) === Number(str[1] - Number(str[0]))) {
      answer++;
    }
  }
}
console.log(answer);
