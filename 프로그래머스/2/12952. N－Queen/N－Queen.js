function solution(n) {
    let answer = 0;
    const width = Array(n).fill(false);
    const diagonal1 = Array(n * 2).fill(false);
    const diagonal2 = Array(n * 2).fill(false);
    
    function dfs(y) {
        if(y === n) {
            answer += 1;
        } else {
            for(let i = 0; i < n; i++) {
                if(width[i] || diagonal1[i + y] || diagonal2[i - y + n]) {
                    continue;
                }
                width[i] = diagonal1[i + y] = diagonal2[i - y + n] = true;
                dfs(y + 1);
                width[i] = diagonal1[i + y] = diagonal2[i - y + n] = false;
            }
        }
    }
    dfs(0);
    return answer;
}