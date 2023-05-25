const fruits = ["a", "b", "v", "d", "o"];

// 배열 아이템을 참조하는 방법
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[4]);
console.log(fruits.length)

console.clear()

for(let i = 0; i < fruits.length; i ++){
    console.log(fruits[i])
}

//추가 삭제 - 좋지 않은 방식
fruits[5] = 5;
fruits[fruits.length] = 'jk'
console.log(fruits)
console.log(fruits.length)

delete fruits[1];
console.log(fruits)