//symbol
//유일한 키를 생성할 수 있다.
const map = new Map();
// const key1 = 'key';
// const key2 = 'key';

const key1 = Symbol('key')
const key2 = Symbol('key')
map.set(key1, 'hello')
console.log(map.get(key2));
console.log(key1 === key2)

//동일한 이름으로 하나의 키를 사용하고 싶다면, Symbol.for
//전역 심벌 레지스트리 (Glbal Symbol Registry)
const k1 = Symbol.for('key');
const k2 = Symbol.for('key');
console.log(k1 === k2);

console.log(Symbol.keyFor(k1))
console.log(Symbol.keyFor(key1))