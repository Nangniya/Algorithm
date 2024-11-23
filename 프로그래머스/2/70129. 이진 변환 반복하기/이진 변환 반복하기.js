function solution(s) {
    let trans = 0;
    let zero = 0;
    
    while(s !== '1') {
        trans++;
        zero += s.split('').filter(str => str ==='0').length;
        s = s.split('').filter(str => str !=='0').length.toString(2);
    }
    
    return [trans, zero];
}