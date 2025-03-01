const convert = n => {
    if(n === 6) return 1;
    if(n === 5) return 2;
    if(n === 4) return 3;
    if(n === 3) return 4;
    if(n === 2) return 5;
    else return 6;
}

function solution(lottos, win_nums) {
    let unknown = 0, confirmedWin = 0;
    for(let num of lottos) {
        if(num === 0) unknown++;
        else if(win_nums.includes(num)) confirmedWin++;
    }
    const max = unknown + confirmedWin;
    const min = confirmedWin;
    return [convert(max), convert(min)];
}