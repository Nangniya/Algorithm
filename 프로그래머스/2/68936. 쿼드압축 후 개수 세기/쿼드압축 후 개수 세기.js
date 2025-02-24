function solution(arr) {
    const N = arr.length;
    const answer = [0, 0]; // [0 개수, 1 개수]
    
    const dfs = (size, r, c) => {
        const first = arr[r][c];
        if(size === 1) {
            answer[first]++;
            return;
        }
        
        let isUniform = true;
        for(let i = r; i < r + size; i++) {
            for(let j = c; j < c + size; j++) {
                if(arr[i][j] !== first) {
                    isUniform = false;
                    break;
                }
            }
            if(!isUniform) break;
        }
        
        if(isUniform) {
            answer[first]++;
            return;
        } else {
            const half = size / 2;
            dfs(half, r, c);
            dfs(half, r + half, c);
            dfs(half, r, c + half);
            dfs(half, r + half, c + half);
        }
    }
    
    dfs(N, 0, 0);
    return answer;
}