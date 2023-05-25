// 퀴즈 4
// 5이상(보다 큰)의 숫자들의 평균

const nums = [3, 16, 5, 25, 4, 34, 21];

// let quiz4 = nums.filter((value) => {
//     return value > 5
// })
// let quiz4result = quiz4.reduce((sum, value) => {
//     sum += value;
//     return sum
// }, 0)
// console.log(quiz4result)

const result2 = nums
  .filter((num) => num > 5)
  .reduce((avg, num, _, array) => avg + num / array.length, 0);

// const result2 = nums
//   .filter((num) => num > 5)
//   .reduce((avg, num, _, array) => avg + num / array.length, 0);

//   console.log(result2);
