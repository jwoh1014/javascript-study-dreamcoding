// 단항 연산자 Unary Operators
// + 양
// - 음
// ! (부정)

let a = 5;
a = -a;
console.log(a);
a = -a;
console.log(a);

a = +a
console.log(a);

//!! 값을 boolean 타입으로 변환함
let boolean = true
console.log(boolean);
console.log(!boolean);
console.log(!!boolean);
console.log(!!!boolean);

//+ 숫자가 아닌 타입들을 숫자로 변환하면 어떤 값이 나오는지 확인할 수 있음
console.clear();
console.log(+false);
console.log(+null);
console.log(+'');
console.log(+true);
console.log(+'text');
console.log(+undefined);