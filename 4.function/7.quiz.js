// 주어진 숫자 만큼 9부터 순회하는 함수
// 순회하면서 주어진 특정한 일을 수행해야 한다
// 5, 순회하는 숫자를 다 출력하고 싶음
// 5, 순회하는 숫자의 두배값을 다 출력하고 싶음


function iterate(max, action){
  for(let i = 0; i < max; i++){
    action(i)
  }
}

function print(num){
  console.log(num)
}

function doublePrint(num){
  console.log(num*2)
}

iterate(5, print)
iterate(5, doublePrint)




// setTimeout(() => {
//   console.log("1초");
// }, 1000);


// function iterate(max, action) {
//   for (let i = 0; i < max; i++) {
//     action(i);
//   }
// }

// function print(num){
//   console.log(num)
// }

// function doublePrint(num){
//   console.log(num**3)
// }

// iterate(5, print);
// iterate(5, doublePrint);
