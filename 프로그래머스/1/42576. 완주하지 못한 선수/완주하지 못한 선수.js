function solution(participant, completion) {
    const obj = {};
    for(let i = 0; i < participant.length; i++){
        if(obj[participant[i]] === undefined) {
            obj[participant[i]] = 1;
        } else {
            obj[participant[i]] += 1;
        }
    }
    for(let i = 0; i < completion.length; i++){
        obj[completion[i]] -= 1;
    }
    for(key in obj){
        if(obj[key] > 0) return key
    }
}