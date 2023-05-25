// Spread 연산자, 전개구문
// 모든 Iterable은 Spread 될 수 있다.
// 순회가 가능한 모든 것들은 촤르르륽 펼쳐질 수 있따.
// func(...Iterable)
// [...Iterable]

function add(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];
console.log(add(...nums));


// Rest parameters
function sum(first, second, ...nums){
    console.log(nums);
}
sum(1, 2, 3, 5, 6, 0)

const fruits1 = ['a', 'b']
const fruits2 = ['c', 'd']

let arr = fruits1.concat(fruits2);
console.log(arr)

arr = [...fruits1, ...fruits2];
console.log(arr)

//Object 
const ellie = {name : 'Ellie', age : 20};
const updated = {
    ...ellie, 
    job : 's/w engineer'
}

console.log(updated)
