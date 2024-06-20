const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

for (let i = 0; i < input.length - 1; i++) {
  for (let j = i + 1; j < input.length; j++) {
    const sevenArr = input.filter((item, index) => {
      return index !== i && index !== j;
    });
    const sum = sevenArr.reduce((acc, cur) => acc + cur, 0);
    if (sum === 100) {
      console.log(sevenArr.sort((a, b) => a - b).join("\n"));
      return;
    }
  }
}
