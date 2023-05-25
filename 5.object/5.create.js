// const apple = {
//   name: "apple",
//   display: function () {
//     console.log(`${this.name} : mango`);
//   },
// };

// const orange= {
//   name: "orange",
//   display: function () {
//     console.log(`${this.name} : blueberry`);
//   },
// };

//생성자 함수
function Fruit(name, emoji) {
    this.이름 = name;
    this.이모지 = emoji;
    this.디스플레이 = () => {
        console.log(`${this.이름} : ${this.이모지}`)
    }
    // return this; 생략가능
}

const apple = new Fruit('apple', '과일');
const orange = new Fruit('orange', '오렌지');

console.log(apple);
console.log(orange);