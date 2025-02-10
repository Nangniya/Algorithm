function solution(strs, t) {
    const N = t.length;
    const DP = Array(N + 1).fill(Infinity);
    DP[0] = 0;
    const sizes = new Set(strs.map(str => str.length));
    
    for(let i = 1; i <= N; i++) {
        for(const size of sizes) {
            if(i - size >= 0 && strs.includes(t.slice(i - size, i))) {
                DP[i] = Math.min(DP[i], DP[i - size] + 1);
            }
        }
    }
    
    return DP[N] === Infinity ? -1 : DP[N];
}