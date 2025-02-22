function solution(today, terms, privacies) {
    const types = new Map();
    const todayDate = new Date(today);
    const answer = [];
    
    for(const term of terms) {
        const [t, n] = term.split(' ');
        types.set(t, Number(n));
    }
    
    for(const [idx, privacy] of privacies.entries()) {
        const [date, type] = privacy.split(' ');
        const expireDate = new Date(date);
        expireDate.setMonth(expireDate.getMonth() + types.get(type));
        
        if (expireDate <= todayDate) answer.push(idx + 1);
    }
    
    return answer;
}