function solution(alp, cop, problems) {
    let [maxAlp, maxCop] = [0, 0];
    problems.forEach(p => {
        maxAlp = Math.max(p[0], maxAlp);
        maxCop = Math.max(p[1], maxCop);
    })
    alp = Math.min(alp, maxAlp); // 이미 목표치 이상일 경우 목표치로 맞추기
    cop = Math.min(cop, maxCop); // 이미 목표치 이상일 경우 목표치로 맞추기
    
    const DP = Array.from({length: maxAlp + 1}, () => Array(maxCop + 1).fill(Infinity));
    DP[alp][cop] = 0;
    
    for(let i = alp; i <= maxAlp; i++) {
        for(let j = cop; j <= maxCop; j++) {
            if (i === maxAlp && j === maxCop) break;
            
            // 기본 공부(알고리즘, 코딩)
            if(i + 1 <= maxAlp) DP[i + 1][j] = Math.min(DP[i + 1][j], DP[i][j] + 1);
            if(j + 1 <= maxCop) DP[i][j + 1] = Math.min(DP[i][j + 1], DP[i][j] + 1);
            
            // 문제 풀기
            for(const [alp_req, cop_req, alp_rwd, cop_rwd, cost] of problems) {
                if(i >= alp_req && j >= cop_req) {
                    const nextAlp = Math.min(maxAlp, i + alp_rwd);
                    const nextCop = Math.min(maxCop, j + cop_rwd);
                    
                    DP[nextAlp][nextCop] = Math.min(DP[nextAlp][nextCop], DP[i][j] + cost);
                }
            }
        }
    }
    
    return DP[maxAlp][maxCop];
}