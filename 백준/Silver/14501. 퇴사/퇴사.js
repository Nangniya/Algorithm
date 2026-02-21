const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const N = Number(input[0]);
const TP = input.slice(1).map((row) => row.split(" ").map(Number));

// dp[i]: i번째 날부터 퇴사일까지 벌 수 있는 최대 이익
// N+1인 이유: N일째 상담이 1일 걸려 N일에 끝나는 경우, dp[N]을 참조해야 하기 때문
const dp = Array(N + 1).fill(0);

// 마지막 날(N-1)부터 0일까지 거꾸로 계산
for (let i = N - 1; i >= 0; i--) {
  const [day, price] = TP[i];

  dp[i] = i + day <= N ? Math.max(dp[i + 1], price + dp[i + day]) : dp[i + 1];
}

console.log(dp[0]);
