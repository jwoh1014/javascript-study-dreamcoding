const num1 = 123;
const num2 = new Number(123);
console.log(num1);
console.log(num2);
// [Number : 123]
console.log(typeof num1);
console.log(typeof num2);

console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

if (num1 < Number.MAX_VALUE) {
}
if (Number.isNaN(num1)) {
}

// 지수표기법 (매우 크거나 작은 숫자를 표기할 때 사용, 10의 n승으로 표기)
const num3 = 102;
console.log(num3.toExponential());

//반올림하여 문자열로 변환
const num4 = 1234.2658;
console.log(num4.toFixed());

console.log(num4.toString());
console.log(num4.toLocaleString("ar-EG"));

// 원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5));
console.log(num4.toPrecision(6));

console.log(Number.EPSILON); // 0과 1사이에서 나타낼 수 있는 가장 작은 숫자
if (Number.EPSILON > 0 && Number.EPSILON < 1) {
  console.log(Number.EPSILON);
}
const num = 0.1 + 0.2 - 0.2 //자바스크립트는 이걸 계산할때 2진수(0과 1로 나타낼수 있는 비트의 조합)로 바꿔서 계산했다가 다시 10진수로 반환한다.
console.log(num)

function isEqual(original, expected){
    return Math.abs(original - expected) < Number.EPSILON
}
console.log(isEqual(1, 1))
console.log(isEqual(0.1, 0.1))
console.log(isEqual(num, 1))