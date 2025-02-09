function solution(n) {
    if(n === 1 || n === 2) return n;
    
    const DP = Array(n + 1).fill(0);
    DP[1] = 1;
    DP[2] = 2;
    
    for(let i = 3; i <= n; i++) {
        DP[i] = (DP[i - 1] + DP[i -2]) % 1000000007
    }
    
    return DP[n];
}