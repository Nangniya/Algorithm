function getMultiSet(str) {
    const upperStr = str.toUpperCase();
    const multiSet = new Map();

    for (let i = 0; i < upperStr.length - 1; i++) {
        const pair = upperStr.substring(i, i + 2);
        if (/[A-Z]{2}/.test(pair)) {
            multiSet.set(pair, (multiSet.get(pair) || 0) + 1);
        }
    }
    return multiSet;
}

function solution(str1, str2) {
    const [set1, set2] = [getMultiSet(str1), getMultiSet(str2)];
    let [intersection, union] = [0, 0];

    for (const [key, count1] of set1.entries()) {
        const count2 = set2.get(key) || 0;
        intersection += Math.min(count1, count2);
        union += Math.max(count1, count2);
    }
    
    for (const [key, count2] of set2.entries()) {
        if (!set1.has(key)) union += count2; 
    }

    const jaccardSimilarity = union === 0 ? 1 : intersection / union;

    return Math.floor(jaccardSimilarity * 65536);
}