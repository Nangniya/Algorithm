function solution(k, tangerine) {
    const MAP = new Map();
    for(const size of tangerine) {
        MAP.set(size, (MAP.get(size) || 0) + 1);
    }
    const sizes = [...MAP].map(([v, s]) => s).sort((a, b) => b - a);
    let count = 0;
    let answer = 0;
    for(const size of sizes) {
        if(count + size <= k) {
            count += size;
            answer++;
        } else {
            if(count < k) answer++;
            break;
        }
    }
    
    return answer;
}