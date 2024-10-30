// n=12 and b=2 return 3, because 12 in binary is "1100", which reverses to "0011", equivalent to 3 in decimal.

const num = 12
let quotient = num
const divisor = 2
const numArr = []
let number

while (quotient > 0) {
  number = num / divisor
  let remainder = num % divisor

  numArr.push(remainder)
}
console.log(numArr)
