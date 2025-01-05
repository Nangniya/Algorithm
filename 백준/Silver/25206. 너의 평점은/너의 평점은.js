const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

let allW = 0;
let allWG = 0;

const SCORE = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
};

for (const item of input) {
  const [name, w, grade] = item.split(" ");
  const G = grade.trim();
  const W = Number(w);
  if (G === "P") continue;
  allW += W;
  allWG += SCORE[G] * W;
}

console.log(allWG / allW);
