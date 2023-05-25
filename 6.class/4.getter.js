// 접근자 프로퍼티 Accessor Proverty


class Student {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get display () {
        return `${this.firstName} ${this.lastName}`
    } //get을 쓰면 일반 property에 접근할때처럼 할 수 있다. 
    set fullName(value) {
        console.log('set', value);
    } //할당할때
}




const student = new Student("수지", "김");
console.log(student.firstName);
console.log(student.display)
// student.firstName = "안나";
// console.log(student.firstName);
// console.log(student.fullName);
student.fullName = '김철수'



// class Student {
//     constructor(firstName, lastName) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//     }
//     get fullName() {
//       return `${this.lastName} ${this.firstName}`;
//     }
  
//     set fullName(value){
//       console.log('set', value)
//     }
//   }
  