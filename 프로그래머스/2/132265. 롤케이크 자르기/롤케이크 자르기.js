function solution(topping) {
    let answer = 0;
    const TMap = new Map();
    const TSet = new Set();
    
    for(const t of topping) {
        TMap.set(t, (TMap.get(t) || 0) + 1); 
    }
    
    for(const t of topping) {
        TSet.add(t);
        TMap.set(t, TMap.get(t) - 1);
        if(TMap.get(t) === 0) TMap.delete(t);
        
        if(TSet.size === TMap.size) answer++;
    }
    
    return answer;
}