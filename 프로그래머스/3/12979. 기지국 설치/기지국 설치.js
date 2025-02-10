function solution(n, stations, w) {
    let answer = 0;
    let curIdx = 1;
    let stIdx = 0;
    while(curIdx <= n) {
        if(curIdx >= stations[stIdx] - w) {
            curIdx = stations[stIdx] + w + 1;
            stIdx++;
        } else {
            answer++;
            curIdx += 2 * w + 1;
        }
    }
    return answer;
}