function solution(n, words) {
    const set = Array.from({ length: n }, (_, i) => []);
    let answer = [0, 0]; 
    for(let i = 0; i < words.length; i++) {
        let isOut = false;
        const num = i % n;
        if(i > 0) {
            const last = words[i - 1].slice(-1);
            const start = words[i].slice(0, 1);
            if(start !== last) {
                answer = [num + 1, set[num].length + 1];
                isOut = true;
            }
        }
        set.forEach((arr, j) => {
            if(arr.includes(words[i])) {
                answer = [num + 1, set[num].length + 1];
                isOut = true;
            }
        })
        if(isOut) break;
        set[num].push(words[i]);
    }
    return answer;
}