function solution(record) {
    const chats = [];
    const table = {};
    for(let i = 0 ; i < record.length; i++){
        const arr = record[i].split(' ');
        const id = arr[1];
        if(arr[0] === "Enter") { // 입장
            chats.push([id, "Enter"])
            table[id] = arr[2]
        } else if(arr[0] === "Leave") { // 퇴장
            chats.push([id, "Leave"])
        } else { // 닉네임 변경
            table[id] = arr[2]
        }
    }
    const answer = chats.map((chat, index) => {
        if(chat[1] === "Enter"){
            return `${table[chat[0]]}님이 들어왔습니다.`
        } else {
            return `${table[chat[0]]}님이 나갔습니다.`
        }
    })
    return answer;
}