function solution(money) {
    const N = money.length;
    const DP1 = Array(N).fill(0); // 첫 번째 집 도둑질 하는 경우
    const DP2 = Array(N).fill(0); // 첫 번째 집 도둑질 안 하는 경우
    
    // 첫 번째 집 도둑질 하는 경우
    DP1[0] = money[0];
    DP1[1] = money[0];
    for(let i = 2; i < N - 1; i++) {
        DP1[i] = Math.max(DP1[i - 1], DP1[i - 2] + money[i]);
    }
    
    // 첫 번째 집 도둑질 안 하는 경우
    DP2[1] = money[1];
    for(let i = 2; i < N; i++) {
        DP2[i] = Math.max(DP2[i - 1], DP2[i - 2] + money[i])
    }
    
    return Math.max(DP1[N - 2], DP2[N - 1]);
}