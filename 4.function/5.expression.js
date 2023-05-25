// 함수 선언문 function name(){}
// 함수 표현식 const name = function () {}
// 화살표 함수 const name = () => {}
let add = function (a, b) {
  return a + b;
};

console.log(add(1, 3));

// 화살표 함수 const name = () => {}

add = (a, b) => {
  return a + b;  //어떤 값만 return 하는 경우라면 return이랑 중괄호 없애도됨
  // add = (a, b) => a + b;
};

console.log(add(1, 3));


// IIFE (Immediatedly-Invoked Function Expressions)
(function run(){
    console.log('d')
})();