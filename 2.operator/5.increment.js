// 증가 & 감소 연산자 Increment & Decrement Operators
let a = 0;
console.log(a);
a++; // a = a + 1;
a--; // a= a - 1;

console.clear();
// 주의! 
// a++ 필요한 연산을 하고, 그 뒤 값을 증가시킨다
// ++a  값을 먼저 증가하고 필요한 연산을 한다
a = 0;
let b = a++; //b에 a 값을 먼저 할당하고 그 뒤에 a 값을 증가시킨다
console.log(b);
console.log(a);

console.clear();
a = 2 
let c = ++a;
console.log(c);
console.log(a);