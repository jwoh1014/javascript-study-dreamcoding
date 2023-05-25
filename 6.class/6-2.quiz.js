// 카운터 만들기
// 0이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터 만들기

class Counter {
  #value;
  constructor(startValue) {
    if (isNaN(startValue) || startValue < 0) {
      return (this.#value = 0);
    } else {
      return (this.#value = startValue);
    }
  }
  increment = () => {
    return this.#value++;
  };
  get value() {
    return this.#value;
  }
}

const newcounter = new Counter(88)
newcounter.increment()
newcounter.increment()
newcounter.increment()
newcounter.increment()
newcounter.increment()
newcounter.increment()
console.log(newcounter.value)













// class Counter {
//   #value;
//   constructor(startValue) {
//     if (isNaN(startValue) || startValue < 0) {
//       return (this.#value = 0);
//     } else {
//       return (this.#value = startValue);
//     }
//   }
//   get increment() {
//     return this.#value++;
//   }
//   get Value() {
//     return this.#value;
//   }
// }

// const result = new Counter (8);
// result.increment
// result.increment
// result.increment
// result.increment
// console.log(result.Value)

// class Counter {
//     #value;
//     constructor(startValue) {
//       if (startValue < 0 || isNaN(startValue)) {
//         this.#value = 0;
//       } else {
//         this.#value = startValue;
//       }
//     }
//     increment() {
//       return this.#value++;
//     }
//     get theValue() {
//       return this.#value;
//     }
//   }

//   const newCount = new Counter(-6)
//   newCount.increment()
//   newCount.increment()
//   newCount.increment()
//   newCount.increment()
//   newCount.increment()
//   newCount.increment()
//   newCount.increment()
//   console.log(newCount.theValue)
