function dfs(curK, cnt, dungeons, visited) {
    let answerMax = cnt;
    for(let i = 0; i < dungeons.length; i++) {
        if(curK >= dungeons[i][0] && visited[i] === 0) {
            visited[i] = 1;
            answerMax = Math.max(
                answerMax, 
                dfs(curK - dungeons[i][1], cnt + 1, dungeons, visited)
            );
            visited[i] = 0;
        }
    }
    
    return answerMax;
}

function solution(k, dungeons) {
    const visited = Array(dungeons.length).fill(0);
    const answerMax = dfs(k, 0, dungeons, visited);
    return answerMax;
}