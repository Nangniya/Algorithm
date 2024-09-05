function solution(want, number, discount) {
    let answer = 0;
    const obj = {}
    for(let i = 0; i < want.length; i++){
       obj[want[i]] = number[i];
    }
    for(let i = 0; i < discount.length - 9; i++){
        const copy = {...obj};
        let isFitted = true;
        for(let j = 0; j < 10; j++){
            if(copy[discount[i + j]] === undefined || copy[discount[i + j]] === 0) {
                isFitted = false;
                break;
            } else {
                copy[discount[i + j]]--;
            }
        }
        if(isFitted === true) answer++;
    }
    return answer;
}