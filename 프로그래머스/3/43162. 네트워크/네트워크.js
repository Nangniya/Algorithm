function dfs(computers, visited, node) {
    visited[node] = true;
    for (let i = 0; i < computers[node].length; i++) {
        if(computers[node][i] && !visited[i]) {
            dfs(computers, visited, i);
        }
    }
}

function solution(n, computers) {
    let answer = 0;
    const visited = Array(n).fill(false);
    for (let i = 0; i < n; i++) {
        if(!visited[i]) {
            dfs(computers, visited, i);
            answer++;
        }
    }
    return answer;
}