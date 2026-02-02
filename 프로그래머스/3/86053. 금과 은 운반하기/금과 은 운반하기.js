function solution(a, b, g, s, w, t) {
    let low = 0;
    let high = 10**14 * 4; 
    let answer = high;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        
        if (check(mid, a, b, g, s, w, t)) {
            answer = mid;
            high = mid - 1; // 가능하다면 시간을 더 줄인다.
        } else {
            low = mid + 1; // 불가능하다면 시간을 더 늘린다.
        }
    }

    return answer;
}

function check(time, a, b, g, s, w, t) {
    let total_g = 0;
    let total_s = 0;
    let total_total = 0;
    
    for (let i = 0; i < g.length; i++) {
        let roundTime = t[i] * 2;
        let moveCount = Math.floor((time + t[i]) / roundTime);
        
        let maxWeight = moveCount * w[i];

        total_g += Math.min(g[i], maxWeight);
        total_s += Math.min(s[i], maxWeight);
        total_total += Math.min(g[i] + s[i], maxWeight);
    }

    // 해당 시간 내에 나를 수 있는 금의 총합 ≥ 날라야 하는 금의 양
    // 해당 시간 내에 나를 수 있는 은의 총합 ≥ 날라야 하는 은의 양
    // 해당 시간 내에 나를 수 있는 (금+은) 총합 ≥ 날라야 하는 (금+은)의 양
    if (total_g >= a && total_s >= b && total_total >= a + b) {
        return true;
    }
    return false;
}