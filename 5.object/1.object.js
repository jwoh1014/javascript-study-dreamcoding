// Object literal { key : value }
// new Object()
// Objec.create();
// key - 문자, 숫자, 문자열, 심볼
// value - 원시값, 객체 (함수)

let apple = {
  name: "apple",
  "hello-bye": "!",
  0: 1,
  ["hello-bye1"]: "dk",
};

// 속성에 접근하기 위해서는

console.log(apple.name)
console.log(apple["hello-bye"])
console.log(apple["hello-bye1"])
console.log(apple["name"])

//속성 추가 
apple.emoji = '45';
console.log(apple.emoji);

//속성 사게
delete apple.emoji;
console.log(apple.emoji)

