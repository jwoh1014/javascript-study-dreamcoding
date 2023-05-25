//조건문 conditional statement
// switch
//if else if else if else.......if ...else
//정해진 범위 안의 값에 대해 특정한 일을 해야 하는 경우

let day = 6;
let dayName;
switch (day) {
  case 0:
    dayName = "월요일";
    break;
  case 1:
    dayName = "화요일";
    break;
  case 2:
    dayName = "수요일";
    break;
  case 3:
    dayName = "목요일";
    break;
  case 4:
    dayName = "금요일";
    break;
  default:
    console.log("해당 요일이 없다.");
}
console.log(dayName);


let condition = "okay";
let text;

switch (condition) {
  case "okay":
  case "good":
    text = "좋음!";
    break;
  case "bad":
    text = "나쁨!";
    break;
}
console.log(text);
