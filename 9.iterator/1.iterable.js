// Iterable 하다는 것은 순회가 가능하다는 것이다.
// [Symbol.iterator](): Iterator;
//심볼 정의를 가진 객체나, 특정한 함수가 Iterator를 리턴한다는 것은
// 순회 가능한 객체이다 라는 것을 알 수 있다.
// 순회가 가능하면 무엇을 할 수 있나? for..of, spread

//Array string map set 따른다

const array = [1, 2, 3];
for (const item of array.values()) {
  //keys
  console.log(item);
}

const obj = { 0: 0, 1: 2 };
for (const item in obj ) {
  //key를 출력
  console.log(item);
}

const iterator = array.values();
for (const item of iterator){
    console.log(item)
}

// const iterator = arry.values();
// console.log(iterator)
