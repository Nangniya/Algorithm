const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const N = input.shift();
input.sort((a, b) => {
  const [age1, name1] = a.split(" ");
  const [age2, name2] = b.split(" ");

  if (age1 !== age2) return age1 - age2;

  return 0;
});

console.log(input.join("\n"));
