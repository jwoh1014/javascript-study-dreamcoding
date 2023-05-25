// 접근 제어자 - 캡슐화
// private(#), public(기본), protected

class Fruit {
    #name;
    #emoji;
    #type = '과일';
    constructor(name, emoji) {
      this.#name = name;
      this.#emoji = emoji;
    }
    // 인스턴스 레벨의 메서드
    #display = () => {
      console.log(`${this.#name} : ${this.#emoji}`);
    };
  }

  // console.log(Fruit)
  // apple은 fruit 클래스의 인스턴스이다
  const apple = new Fruit("apple", "🚀");
  console.log(apple.display())
//   apple.#name1 = '오렌지' //이렇게 하면 안됨 클래스 안에서만 가능
  console.log(apple);