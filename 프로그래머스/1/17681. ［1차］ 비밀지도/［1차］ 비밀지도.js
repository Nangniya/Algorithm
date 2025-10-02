function solution(n, arr1, arr2) {
    const map1 = arr1.map(num => num.toString(2).padStart(n, 0));
    const map2 = arr2.map(num => num.toString(2).padStart(n, 0));
    const map = [];
    for (let i = 0; i < n; i++) {
        let str = '';
        for (let j = 0; j < n; j++) {
            str += Number(map1[i][j]) + Number(map2[i][j]) === 0 ? ' ' : '#';
        }
        map.push(str);
    }
    return map;
}