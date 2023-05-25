//객체를 손쉽게 만들 수 있는 템플릿

//javascript 는 프로토타입 기반이라 function 통해서 찍어냈는데
//보통 객체 지향 언어들은 class 기반

//1. 생성자 함수 (오래된 고전적인 방법)
//2. 클래스

//클래스
class Fruit {
  //생성자 : new 키워드로 객체 생성할때 호출되는 함수
  constructor(name, emoji) {
    this.name = name;
    this.emoji1 = emoji;
  }
  display = () => {
    console.log(`${this.이름} : ${this.이모지}`);
  };
}

// display(){
//   console.log(`${this.이름} : ${this.이모지}`);
// };

// apple은 fruit 클래스의 인스턴스이다
const apple = new Fruit("apple", "과일");
// orange는 fruit 클래스의 인스턴스이다
const orange = new Fruit("orange", "오렌지");

console.log(apple);
console.log(orange);

//obj는 객체이고, 그 어떤 클래스의 인스턴스도 아니다.
const obj = { name: "jaewon" };

//선언문 표현식 할당문



// 실습
// class Fruit {
//   constructor (name, emoji){
//     this.name = name;
//     this.emoji = emoji
//   }
//   display(){
//     console.log(`이 과일의 이름은 : ${this.name} 이고 모양은 ${this.emoji} 입니다.`)
//   }
// }


// const banana = new Fruit('바나나', '붸네네')
// banana.display()
// console.log(banana)