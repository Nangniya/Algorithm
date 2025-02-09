function solution(land) {
    const N = land.length;
    const DP = Array.from({ length: N }, () => Array(4).fill(0));
    
    for(let j = 0; j < 4; j++) {
        DP[0][j] = land[0][j];
    }
    for(let i = 1; i < N; i++) {
        for(let j = 0; j < 4; j++) {
            DP[i][j] = 
                Math.max(...DP[i - 1].filter((_, idx) => idx !== j)) + land[i][j]
        }
    }
    
    return Math.max(...DP[N - 1])
}