// 래퍼 객체 (Wrapper Object)
// 원시값을 필요에 따라서 관련된 빌트인 객체로 변환한다. 


const number = 123; // number원시 타입

// number 원시 타입을 감싸고 있는 Number 객체로 감싸진다
// javascript에서는 원시 타입을 감싸고 있는 객체가 있다. 점을 찍으면 객체로 변환되고 다양한 빌트인 객체를 쓸 수 있다.
console.log(number.toString());
console.log(number)

const text = 'text'; //string 문자열 원시타입
console.log(text)
text.length //string 객체
text.trim()