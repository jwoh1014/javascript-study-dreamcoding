// 정직원과 파트타임 직원을 나타낼 수 있는 클래스를 만들어보자
// 직원들의 정보 : 이름, 부서 이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급 계산 가능
// 정직원은 시간당 만원
// 파트나입 직원은 시간당 팔천원



// class EmployeeInfo {
//   constructor(name, department, hourPerMonth, wage){
//     this.name = name;
//     this.department = department;
//     this.hourPerMonth = hourPerMonth;
//     this.wage = wage;
//   }
//   salaryCounter(){
//     return this.hourPerMonth * this.wage;
//   }
// }

// class formalEmployee extends EmployeeInfo {
//   static #wage = 10000;
//   constructor(name, department, hourPerMonth){
//     super(name, department, hourPerMonth, formalEmployee.#wage)
//   }
// }
// class partEmployee extends EmployeeInfo {
//   static #wage = 8000;
//   constructor(name, department, hourPerMonth){
//     super(name, department, hourPerMonth, partEmployee.#wage)
//   }
// }

// const jaewon = new partEmployee('jaewon', 'engineering', 865)
// console.log(jaewon.salaryCounter())


class Employee {
  constructor(name, department, hourMonth, payRate) {
    this.name = name;
    this.department = department;
    this.hourMonth = hourMonth;
    this.payRate = payRate;
  }
  salaryCounter() {
    return this.hourMonth * this.payRate;
  }
}

class partEmployee extends Employee {
  static #wage = 8000; //상수는 정의해
  constructor(name, department, hourMonth) { //이걸 변수로 받아와서 
    super(name, department, hourMonth, partEmployee.#wage); 
    // 위로 보낸당
  }
}

class regularEmployee extends Employee {
  static #wage = 10000;
  constructor(name, department, hourMonth){
    super(name, department, hourMonth, regularEmployee.#wage)
  }
}

const jaewon = new partEmployee('jaewon', 'cs', 5)
console.log(jaewon.salaryCounter())

// class Employee {
//   constructor(name, department, hourPerMonth, payRate) {
//     this.name = name;
//     this.department = department;
//     this.hourPerMonth = hourPerMonth;
//     this.payRate = payRate;
//   }
//   salaryCounter() {
//     return this.hourPerMonth * this.payRate;
//   }
// }

// class partEmployee extends Employee {
//   static #partPayRate = 8000;
//   constructor(name, department, hourPerMonth) {
//     super(name, department, hourPerMonth, partEmployee.#partPayRate);
//   }
// }
// class regularEmployee extends Employee {
//   static #regularPayRate = 10000;
//   constructor(name, department, hourPerMonth) {
//     super(name, department, hourPerMonth, partEmployee.#regularPayRate);
//   }
// }

// const jaewon = new partEmployee ('jaewon', 'cs', 5)
// console.log(jaewon.salaryCounter())
// console.log()

// class SalaryRegular {
//   constructor(name, department, workingTime) {
//     this.name = name;
//     this.department = department;
//     this.workingTime = workingTime;
//   }
//   salaryCount() {
//     return this.workingTime * 10000;
//   }
// }

// const salary = new SalaryRegular("jaewon", "blockchain", "5");
// console.log(salary.name);
// console.log(salary.department);
// console.log(salary.workingTime);
// console.log(salary.salaryCount());

// class SalaryPart extends SalaryRegular {
//   constructor(name, department, workingTime) {
//     super(name, department, workingTime);
//   }
//   salaryCountPart() {
//     console.log(this.workingTime * 8000);
//   }
// }
// const salaryPart = new SalaryPart("eunju", "grad school", "5");
// console.log(salaryPart.name);
// console.log(salaryPart.department);
// console.log(salaryPart.workingTime);
// salaryPart.salaryCountPart();

// class Employee {
//     constructor(name, department, hourPerMonth, payRate){
//         this.name = name;
//         this.department = department;
//         this.hourPerMonth = hourPerMonth;
//         this.payRate = payRate;
//     }
//     salaryCounter(){
//         return this.hourPerMonth * this.payRate;
//     }
// }

// class partEmployee extends Employee{
//     static #payRate = 8000;
//     constructor(name, department, hourPerMonth){
//         super(name, department, hourPerMonth, partEmployee.#payRate)
//     }
// }
// class regularEmployee extends Employee{
//     static #payRate = 10000;
//     constructor(name, department, hourPerMonth){
//         super(name, department, hourPerMonth, regularEmployee.#payRate)
//     }
// }

// const Jaewon = new regularEmployee('jaewon', 'cs', 6)
// console.log(Jaewon.salaryCounter())
// const Eunju = new partEmployee('eunju', 'bc', 6)
// console.log(Eunju.salaryCounter())
