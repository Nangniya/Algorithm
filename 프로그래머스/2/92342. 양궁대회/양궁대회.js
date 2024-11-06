function combinationsWithRepetition(arr, n) {
    if(n === 1) return arr.map(v => [v]);
    const result = [];
    arr.forEach((fixed, idx, arr) => {
        const rest = arr.slice(idx);
        const combis = combinationsWithRepetition(rest, n - 1);
        const combine = combis.map(v => [fixed, ...v]);
        result.push(...combine);
    })
    return result;
}

function solution(n, info) {
    let maxDiff = 0;
    let maxComb = {};
    
    function calculateScore(combi) {
        let score1 = 0;
        let score2 = 0;
        for (let i = 1; i <= 10; i++) {
            if(info[10 - i] < combi.filter(x => x === i).length) {
                score1 += i;
            } else if(info[10 - i] > 0) {
                score2 += i;
            }
        }
        return [score1, score2];
    }
    
    for(const combi of combinationsWithRepetition([...Array(11).keys()], n)) {
        const cnt = combi.reduce((acc, cur) => {
            acc[cur] = (acc[cur] || 0) + 1;
            return acc;
        }, {});
        const [score1, score2] = calculateScore(combi);
        const diff = score1 - score2;
        if(diff > maxDiff) {
            maxComb = { ...cnt };
            maxDiff = diff;
        }
    }
    
    if(maxDiff > 0) {
        const answer = Array(11).fill(0);
        for(const n of Object.keys(maxComb)) {
            answer[10 - n] = maxComb[n];
        }
        return answer;
    } else {
        return [-1];
    }
}