function solution(n, t, m, p) {
    const totalLen = (t - 1) * m + p;

    let fullSequence = "";
    let number = 0;

    while (fullSequence.length < totalLen) {
        const nBaseStr = number.toString(n).toUpperCase();
        fullSequence += nBaseStr;
        number++;
    }

    let answer = "";
    let curIdx = p - 1;

    for (let count = 0; count < t; count++) {
        answer += fullSequence[curIdx];
        curIdx += m;
    }

    return answer;
}