function solution(cap, n, deliveries, pickups) {
    let answer = 0;
    
    let [dIdx, pIdx] = [n - 1, n - 1];
    while(dIdx >= 0 || pIdx >= 0) {
        if(!(deliveries[dIdx] > 0 || pickups[pIdx] > 0)) break;
        
        let [d, p] = [0, 0];
        const idx = Math.max(dIdx, pIdx);
        answer += 2 * (idx + 1);
        
        // 배달 처리
        for(let j = dIdx; j >= 0; j--) {
            let nd = d + deliveries[j];
            if (nd <= cap) {
                d = nd;
                deliveries[j] = 0;
                dIdx--;
            } else {
                deliveries[j] -= (cap - d);
                d = cap;
                break;
            }
        }
        
        // 수거 처리
        for(let j = pIdx; j >= 0; j--) {
            let np = p + pickups[j];
            if (np <= cap) {
                p = np;
                pickups[j] = 0;
                pIdx--;
            } else {
                pickups[j] -= (cap - p);
                p = cap;
                break;
            }
        }
    }
    return answer;
}