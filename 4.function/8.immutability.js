//함수 내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 좋지 않다.
//상태변경이 필요한 경우에는, 새로운 상태를(오브젝트, 값) 만들어서 반환해야한다.
//원시값 값에 의한 복사 -> 큰 문제는 없지만
//객체값 - 참조에 의한 복사(메모리주소)
function display(num) {
  console.log(num);
}

const value = 4;
display(value);

function displayObj(obj) {
  obj.name = "bob"; // 이렇게 하면 절대 안됨.!! return {...obj, name :' bob'}이런 식으로 해야함.
  console.log(obj);
}
const ellie = { name: "Ellie" };
displayObj(ellie);

console.log(ellie)
