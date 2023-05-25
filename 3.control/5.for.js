//반복문 Loop statement
// for(변수선언; 조건식; 증감식){ }
// 실행순서 :
// 1. 변수선언문
// 2. 조건식의 값이 참이면 { } 코드블럭 수행
// 3. 증감식을 수행
// 4. 조건식이 거짓이 될 때까지 2번과 3번을 반복한다.

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i, j);
  }
}
// 블럭 조건 끝날때까지

// 반복문 제어 : continue, break
for (let i = 0; i < 20; i++) {
  if (i === 10) {
    console.log("i가 드디어 10이 되었다");
    continue;
    break;
  }
  console.log(i);
}
