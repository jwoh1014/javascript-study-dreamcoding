// 매개변수 기본값은 무조건 undefined
// 매개변수 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장된다.
// 매개변수 기본값 Default Parameters a = 1, b =2
function add(a = 5, b = 6) {
  console.log(a);
  console.log(b);
  console.log(arguments[0]);
  console.log(arguments[1]);
  return a + b;
}

add();

//arguments => 전달된 인자에 대한 정보가 들어있다

//Rest 매개변수 Rest Parameters

function sum(a, b, ...numbers) {
  console.log(a);
  console.log(b);
  console.log(numbers);
}

sum(1, 2, 3, 4, 5, 6, 7, 7, 8, 8, 8, 9);
