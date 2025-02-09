function solution(triangle) {
    const N = triangle.length;
    const DP = Array.from({ length: N }, () => Array(N).fill(0));
    
    for(let i = 0; i < N; i++) {
        DP[N - 1][i] = triangle[N - 1][i];
    }
    
    for(let i = N - 2; i >= 0; i--) {
        for(let j = 0; j <= i; j++) {
            DP[i][j] = Math.max(DP[i + 1][j], DP[i + 1][j + 1]) + triangle[i][j];
        }
    }
    
    return DP[0][0];
}