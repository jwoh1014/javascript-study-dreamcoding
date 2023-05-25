// input : ['a', 'b', 'c', 'd']
// output : ['a', 'b', 'c', 'e']

// function change(fruits) {
//   for (let i = 0; i < fruits.length; i++) {
//     if (fruits[i] = "a") {
//       fruits[i] = "e";
//     }
//   }
//   return fruits;
// }

// fruits = ["a", "b", "c", "d"];
// let quiz1 = change(fruits);
// console.log(quiz1);

function change(fruits) {
  for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] == "🍓") {
      fruits[i] = "🥝";
    }
  }
  return fruits;
}

fruits = ["🍌", "🍓", "🍇", "🍓"];
let quiz1 = change(fruits);
console.log(quiz1);

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

function count(array, item) {
  let cnt = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == item) {
      cnt = cnt + 1;
    }
  }
  return cnt;
}

fruits = ["🍌", "🥝", "🍇", "🥝"];
let quiz2 = count(fruits, "🥝");
console.log(quiz2);

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

function newarray(array1, array2) {
  let result = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] == array2[j]) {
        result.push(array1[i]);
      }
    }
  }
  return result;
}

array1 = ["🍌", "🥝", "🍇"];
array2 = ["🍌", "🍓", "🍇", "🍓"];

let quiz3 = newarray(array1, array2);
console.log(quiz3);
