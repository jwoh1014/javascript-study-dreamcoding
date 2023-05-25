// 앝은 복사 shallow copy - 객체는 메모리 주소 전달
// 자바스크립트에서 복사할때는 항상 얕은 복사가 이루어진다
// array.from, concat, slice, spread(...), object.assign

const pizza = { name : 'a', price : 3}
const ramen = { name : 'b', price : 5}
const sushi = { name : 'c', price : 6}

const store1 = [pizza, ramen]
const store2 = Array.from(store1)

// console.log('store1', store1)
// console.log('store2', store2)

// store2.push(sushi)
// console.log('store1', store1)
// console.log('store2', store2)
//배열은 새로 만들어졌으나 각각의 object의 주소를 가르키고 있어서 shallow 카피 일어난다.

pizza.price = 4;
console.log('store1', store1)
console.log('store2', store2)
