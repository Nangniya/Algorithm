const input = require("fs").readFileSync(0).toString().trim();
let X = Number(input);

let line = 1;
while (X > line) {
  X -= line;
  line++;
}

let numer, denom;

if (line % 2 === 0) {
  numer = X;
  denom = line - X + 1;
} else {
  numer = line - X + 1;
  denom = X;
}

console.log(`${numer}/${denom}`);
