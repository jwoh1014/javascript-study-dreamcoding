// Math
// static properties, method

console.log(Math.E); //오일러의 상수, 자연로그의 밑
console.log(Math.PI); //파이값

// Static Method
// 절대값
console.log(Math.abs(-10));
// 소수점 이하를 올림
console.log(Math.ceil(1.4));
// 소수점 이하를 내림
console.log(Math.floor(1.4));
// 소수점 이하를 반올림
console.log(Math.round(1.4));
console.log(Math.round(1.6));
// 정수만 반환
console.log(Math.trunc(1.5432));

//최대 최소값을 찾기
console.log(Math.max(1, 3, 5, 7));
console.log(Math.min(1, 3, 5, 7));

//거듭제곱
console.log(3 ** 6);
console.log(Math.pow(3, 6));

//제곱근
console.log(Math.sqrt(9))

//랜덤한 값을 반환 0 - 1 까지 숫자 중에 랜덤으로
console.log(Math.random())

// 1 - 10 
console.log(Math.floor(Math.random() * 10 + 1))