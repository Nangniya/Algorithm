const input = require("fs")
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const DIST = input[1].split(" ").map(BigInt); // BigInt 사용
const COST = input[2].split(" ").map(BigInt); // BigInt 사용

let answer = 0n; // BigInt 초기화
let minCost = COST[0];

for (let i = 0; i < N - 1; i++) {
  if (COST[i] < minCost) {
    minCost = COST[i]; // 더 저렴한 가격이 나오면 갱신
  }
  answer += minCost * DIST[i]; // 현재 최소 가격으로 거리만큼 주유
}

console.log(answer.toString()); // BigInt는 문자열로 변환하여 출력
