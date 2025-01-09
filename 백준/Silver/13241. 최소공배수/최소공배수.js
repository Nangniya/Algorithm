const [a, b] = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const getGCD = (a, b) => {
  while (b > 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const getLCM = (a, b) => {
  return (a * b) / getGCD(a, b);
};

console.log(getLCM(a, b));
