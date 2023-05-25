class Library {
  constructor(name, university) {
    this.name = name;
    this.university = university;
  }
  display() {
    console.log(`${this.name}의 대학은 ${this.university}입니다.`);
  }
}

const oneTop = new Library('jaewon', 'yonsei');
const twoTop = new Library('eunju', 'seoul');
const threeTop = new Library(4, 6)

console.log(oneTop)
console.log(threeTop)