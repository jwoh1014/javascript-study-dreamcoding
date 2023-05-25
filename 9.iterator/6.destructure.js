// 구조 분해 할당 Destructuring Assignment
// 데이터 뭉치를 쉽게 만들 수 있다.

const fruits = ["a", "b", "c", "d", "e"];
const [first, second, ...others] = fruits;
console.log(first);
console.log(second);
console.log(others);

const point = [1, 2];
const [y, x, z = 7] = point;
console.log(x);
console.log(y);
console.log(z);

function creatEmoji() {
  return ["apple", "사과"];
}

const [title, emoji] = creatEmoji();
console.log(title);
console.log(emoji);

const jaewon = { name: "jaewon", age: 27, job: "s/w engineer" };
function display({ name, age, job }) {
  console.log("이름", name);
  console.log("나이", age);
  console.log("직업", job);
}

display(jaewon);

const { name, age, job: occupation, pet = "강아지" } = jaewon;
console.log(name);
console.log(age);
console.log(occupation);
console.log(pet);
