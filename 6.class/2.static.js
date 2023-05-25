//static 정적 프로퍼티, 메서드

//클래스
class Fruit {
  static MAX_FRUITS = 4;
  //생성자 : new 키워드로 객체 생성할때 호출되는 함수
  //만들어진 인스턴스에 포함되지 않습니다.
  constructor(name, emoji) {
    this.name1 = name;
    this.emoji1 = emoji;
  }

  //클래스 레벨의 메서드
  static makeRandomFruit() {
    // 클래스 레벨의 메서드에서는 this 를 참조할 수 없음
    return new Fruit("banana", "바나나");
  }

  // 인스턴스 레벨의 메서드
  display = () => {
    console.log(`${this.이름} : ${this.이모지}`);
  };
}
console.clear();
const banana = Fruit.makeRandomFruit();
console.log(banana);
console.log(Fruit.MAX_FRUITS);

// apple은 fruit 클래스의 인스턴스이다
const apple = new Fruit("apple", "과일");
// orange는 fruit 클래스의 인스턴스이다
const orange = new Fruit("orange", "오렌지");

console.log(apple);
console.log(orange);

//obj는 객체이고, 그 어떤 클래스의 인스턴스도 아니다.
const obj = { name: "jaewon" };

Math.pow();
Number.isFinite(1)