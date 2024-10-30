// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9

const test = [0, 0, 1, 0]

const onesZeros = (numArr) => {
  let pow = numArr.length - 1
  let total = 0
  let index = 0
  for (el of numArr) {
    total += el * Math.pow(2, pow)
    pow -= 1
  }
  console.log(total)
  return total
}
console.log(onesZeros(test))
