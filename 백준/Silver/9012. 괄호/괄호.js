const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const T = parseInt(input.shift());
const arr = [];
input.forEach((a, i) => {
  let count = 0;
  for (let j = 0; j < a.length; j++) {
    if (a[j] === "(") {
      count++;
    } else {
      count--;
    }
    if (count < 0) {
      break;
    }
  }
  if (count === 0) {
    arr[i] = "YES";
  } else {
    arr[i] = "NO";
  }
});

console.log(arr.join("\n"));
