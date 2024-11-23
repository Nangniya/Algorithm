function solution(brown, yellow) {
    const all = brown + yellow;
    
    for(let i = 3; i <= Math.floor(all / 2); i++) {
        if(all % i !== 0) continue;
        
        const [x, y] = [all / i, i];
        
        if((x - 2) * (y - 2) === yellow) return [x, y];
    }
}