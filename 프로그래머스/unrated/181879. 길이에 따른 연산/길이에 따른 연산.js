function solution(num_list) {
    let answer = 0;
    if(num_list.length <= 10){
        answer += 1;
        for(let i=0; i<num_list.length; i++){
            answer *= num_list[i];
        }
    } else {
        for(let i=0; i<num_list.length; i++){
            answer += num_list[i];
        }
    }
    return answer;
}