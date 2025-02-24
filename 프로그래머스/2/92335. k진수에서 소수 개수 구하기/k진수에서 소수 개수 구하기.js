const isPrime = (n) => {
    if(n < 2) return false;
    for(let i = 2; i <= Math.sqrt(n); i++) {
        if(n % i === 0) return false;
    }
    return true;
}
function solution(n, k) {
    const kNum = n.toString(k);
    const arr = kNum.split('0');
    if(arr.length === 1 && isPrime(kNum)) return 1;

    let answer = 0;
    for(let i = 0; i < arr.length; i++) {
        
        if(isPrime(Number(arr[i]))) answer++;
    }
    return answer;
}