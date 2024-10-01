const score = 700
console.log(score) 

const num = new Number(700) // object that is of type number
console.log(num)
console.log(num.toFixed(2)); // 2 decimels for precision

const num1 = 23.232

console.log(num1.toPrecision(3)); //gives precision value of three numbers eg 23.89=>24.9 and 123.89=> 124 returns string

const num2 = 1000000
// console.log(num2.toLocaleString('en-IN'));

//...............................................Maths............................

// console.log(Math.abs(-4))
// console.log(Math.round(4.33))
// console.log(Math.ceil(4.2))
// console.log(Math.floor(4.9))

console.log(Math.floor((Math.random()*(6-1+1))+1)) //will give value from 1 to 6 like dice as i restricted it

const min = 10
const max = 20

console.log(Math.floor((Math.random()*(max-min+1))+min)
