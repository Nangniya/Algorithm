function solution(progresses, speeds) {
    const n = speeds.length; 
    const days = progresses.map((item, i) => Math.ceil((100 - item) / speeds[i]))
    const answer = [];
    console.log(days);
    
    let count = 0;
    let maxDay = days[0];
    for(let i = 0; i < n; i++){
        if(days[i] <= maxDay){
            count++
        } else {
            answer.push(count);
            count = 1;
            maxDay = days[i];
        }
    }
    answer.push(count);
    return answer
}