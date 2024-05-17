function solution(s){
    let pNum = 0;
    let yNum = 0;
    s.split('').forEach(e => {
        if(e.toLowerCase() === 'p') pNum++
        if(e.toLowerCase() === 'y') yNum ++
    } )
    return pNum === yNum;
}