// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log("먹자");
//   }
//   sleep() {
//     console.log("잔다");
//   }
// }
// class Dog {
//   constructor(color) {
//     this.color = color;
//   }
//   eat() {
//     console.log("먹자");
//   }
//   sleep() {
//     console.log("잔다");
//   }
//   play() {
//     console.log("놀자");
//   }
// }

class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log("먹자");
  }
  sleep() {
    console.log("잔다");
  }
}

class Tiger extends Animal {}

const tiger = new Tiger("노란색");
console.log(tiger);
tiger.sleep();
tiger.eat();

class Dog extends Animal {
  constructor(color, ownerName) {
    super(color); //자식 클래스에서 컨스트럭터로 바꿀때 부모 받아와야함
    this.ownerName = ownerName;
  }
  play() {
    console.log("놀자용");
  }
  eat() {
    console.log('강아지가 먹는다!')
    super.eat(); //받아오고 싶을때
    console.log('강아지가 먹는다!')
  }
}
const dog = new Dog("빨간색", 'Jaewon');
console.log(dog);
dog.eat();
dog.play();
