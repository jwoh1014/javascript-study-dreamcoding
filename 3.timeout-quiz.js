function runInDelay(callback, seconds) {
  if (!callback) {
    throw new Error("callback 함수가 없습니다");
  }
  if (!seconds || seconds < 0) {
    throw new Error("seconds를 똑바로 전달해");
  }
  setTimeout(callback, seconds * 1000);
}

try {
  runInDelay(() => {
    console.log("출력이 되었습니다.");
  }, 0);
} catch (error) {
  console.log("에러 발생 삐용삐용");
}

// function runInDelay(callback, seconds) {
//     if (!callback) {
//       throw new Error("callback 함수를 전달해");
//     }
//     if (!seconds || seconds < 0) {
//       throw new Error("seconds는 0보다 커야 한다");
//     }

//     setTimeout(callback, seconds * 1000);
//   }

// try {
//   runInDelay(() => {
//     console.log("타이머 완료");
//   }, -10);
// } catch (error) {
//     console.log('에러가 발생했어요~~!!')
// }
