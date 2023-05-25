// 정직원과 파트타임 직원을 나타낼 수 있는 클래스를 만들어보자
// 직원들의 정보 : 이름, 부서 이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급 계산 가능
// 정직원은 시간당 만원
// 파트나입 직원은 시간당 팔천원

class Counter {
  constructor(name, department, hourPerMonth, wage) {
    this.name = name;
    this.department = department;
    this.hourPerMonth = hourPerMonth;
    this.wage = wage;
  }

  salaryCounter() {
    return this.hourPerMonth * this.wage;
  }
}

class parttime extends Counter {
  static #wage = 8000;
  constructor(name, department, hourPerMonth) {
    super(name, department, hourPerMonth, parttime.#wage);
  }
}
class regulartime extends Counter {
  static #wage = 10000;
  constructor(name, department, hourPerMonth) {
    super(name, department, hourPerMonth, regulartime.#wage);
  }
}

const Jaewon = new regulartime("jaewon", "sw", 48);
console.log(Jaewon.salaryCounter());

// class EmployeeCounter {
//   constructor(name, department, hourPerMonth, wage) {
//     this.name = name;
//     this.department = department;
//     this.hourPerMonth = hourPerMonth;
//     this.wage = wage;
//   }
//   salaryCounter() {
//     return this.hourPerMonth * this.wage;
//   }
// }

// class partEmployee extends EmployeeCounter {
//   static #pay = 8000;
//   constructor(name, department, hourPerMonth) {
//     super(name, department, hourPerMonth, partEmployee.#pay); //부모에게 전달해주는 것
//   }
// }

// class partEmployee extends EmployeeCounter {
//   static #pay = 8000;
//   constructor(name, department, hourPerMonth) {
//     super(name, department, hourPerMonth, partEmployee.#pay);
//   }
// }

// class Calculator {
//   constructor(name, department, hour, payrate) {
//     this.name = name;
//     this.department = department;
//     this.hour = hour;
//     this.payrate = payrate;
//   }
//   salaryCounter() {
//     return this.hour * this.payrate;
//   }
// }

// class formal extends Calculator {
//   static #pay = 10000;
//   constructor(name, department, hour) {
//     super(name, department, hour, formal.#pay);
//   }
// }

// class parttime extends Calculator {
//   static #pay = 8000;
//   constructor(name, department, hour) {
//     super(name, department, hour, parttime.#pay);
//   }
// }

// const Jaewon = new parttime("jaewon", "s/w", 8);
// console.log(Jaewon.salaryCounter());
