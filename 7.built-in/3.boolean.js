// Boolean

true.valueOf

const isTrue = true;
const isTrue1 = new Boolean(true) //이렇게 객체로 하면 메모리 더 많이 

console.log(isTrue.valueOf());

// Falshy
// 0
// -0
// NaN
// null
// undefined
// ''

// Truthy
// 1
// -1
// '0'
// 'text'
// []
// {}