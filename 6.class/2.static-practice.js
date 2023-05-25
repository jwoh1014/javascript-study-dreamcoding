class Info {
  static MAX_STUDENTS = 16;

  constructor(university, grade) {
    this.university = university;
    this.grade = grade;
  }
  display = () => {
    console.log(
      `이 학생은 ${this.university}를 다니고 ${this.grade}학년입니다.`
    );
  };
  static jaewon = new Info("yonsei", 4);
}

const eunju = new Info("seoul", 1)
console.log(eunju)

console.log(Info.jaewon)