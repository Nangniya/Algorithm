function solution(user_id, banned_id) {
    const isMatch = (id, ban) => {
        if(id.length !== ban.length) return false;
        for(let i = 0; i < id.length; i++) {
            if(ban[i] !== '*' && ban[i] !== id[i]) return false;
        }
        return true;
    }
    
    const possibleSet = new Set();
    const findCombinations = (currentIndex, selectedUsers) => {
        if(currentIndex === banned_id.length) {
            possibleSet.add([...selectedUsers].sort().join(',')); // 중복 방지
            return;
        }
        user_id.forEach(user => {
            if(!selectedUsers.includes(user) && isMatch(user, banned_id[currentIndex])) {
                selectedUsers.push(user);
                findCombinations(currentIndex + 1, selectedUsers);
                selectedUsers.pop(user);
            }
        })
    }
    findCombinations(0, []);
    
    return possibleSet.size;
}