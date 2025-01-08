const input = require("fs").readFileSync(0).toString().trim();

const N = Number(input);

let count = 0;
let current = 666;

while (true) {
  if (String(current).includes("666")) {
    count++;
    if (count === N) {
      console.log(current);
      break;
    }
  }
  current++;
}
