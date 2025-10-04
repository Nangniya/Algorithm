function solution(cacheSize, cities) {
    if (cacheSize === 0) return cities.length * 5;

    const cache = [];
    let answer = 0;

    for (const city of cities) {
        const lowerCaseCity = city.toLowerCase();
        const index = cache.indexOf(lowerCaseCity);
        if (index !== -1) {
            answer += 1;
            cache.splice(index, 1); 
            cache.push(lowerCaseCity);
        } else {
            answer += 5;
            if (cache.length === cacheSize) cache.shift(); 
            cache.push(lowerCaseCity);
        }
    }
    
    return answer;
}