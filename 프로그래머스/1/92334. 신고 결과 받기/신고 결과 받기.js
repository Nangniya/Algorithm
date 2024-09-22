function solution(id_list, report, k) {
    const reporting = {};
    const reported = {};
    for(let i = 0; i < id_list.length; i++){
        const user = id_list[i];
        reporting[user] = [];
        reported[user] = 0;
    }
    for(let i = 0; i < report.length; i++){
        const [start, end] = report[i].split(' ');
        // start가 end를 신고한 기록이 없을 경우에만
        if(!reporting[start].includes(end)){
            reporting[start].push(end);
            reported[end]++;
        } 
    }
    const answer = [];
    const entries = Object.entries(reporting);
    for(const [start, ends] of entries){
        const number = ends.filter((user) => reported[user] >= k).length;
        answer.push(number)
    }
    return answer;
}