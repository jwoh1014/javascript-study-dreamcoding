// 원시 타입은 값이 복사되어 전달됨
let a = 1 ;
let b = a ;
b = 2;
console.log(a);
console.log(b);

// 객체타입은 참조값(메모리 주소, 레퍼런스)가 복사되어 전달됨
let apple = { //0x1234
    name : '사과'
};
let orange = apple; //0x1234

orange.name = '오렌지';
console.log(apple);
console.log(orange);


// 원시 타입과 객체 타입의 차이
// 원시 타입은 변수가 메모리 셀에 바로 들어가 있음
// 객체는 참조 값이 메모리 주소에 들어가 있다
// 원시타입은 
// let a = 2
// let b = a 하면 2가 복사되어서 들어감.