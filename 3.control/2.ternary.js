// 삼항 조건 연산자 Ternary Operator
// 조건식 ? 표현식(참) : 표현식(거짓)

let fruit = 'orange'

if(fruit === 'apple'){
    console.log('참입니다.')
    let a = 1;
    console.log(a);
} else if(fruit === 'orange') {
    console.log('거짓입니다.')
} else {
    console.log('아무것도 아닙니다.')
}

fruit === 'orange' ? console.log('참입니다.') : console.log('거짓입니다.')

let emoji = fruit === 'apple' ? console.log('참입니다.') : console.log('거짓입니다.')
console.log(emoji)
