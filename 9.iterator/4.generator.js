function* multipleGenerator() {
  try {
    for (let i = 0; i < 10; i++) {
      yield i ** 2;
    }
  } catch (error) {
    console.log("error!");
  }
}

//사용하는 사람들에게 제어권을 양도한다.

const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done);
next = multiple.next();
console.log(next.value, next.done);

multiple.throw("Error!");

next = multiple.next();
console.log(next.value, next.done);
