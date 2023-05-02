let input = require('fs').readFileSync(0).toString().trim();
const result = Array.from({length: 26}, () => -1); // a부터 z까지의 알파벳에 대해 -1로 초기화된 배열 생성
for (let i = 0; i < input.length; i++) {
  const alphaIndex = input.charCodeAt(i) - 'a'.charCodeAt(0); 
  // input에 있는 알파벳의 result에서의 index
  if (result[alphaIndex] === -1) { // 해당 알파벳이 처음 등장한 경우에만 위치를 저장
    result[alphaIndex] = i;
  }
}
console.log(result.join(' ')); // 각 알파벳이 등장한 위치 출력