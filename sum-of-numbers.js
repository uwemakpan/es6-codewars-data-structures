// sum of numbers from 0 to N

const number = 6

const sumNum = (num) => {
  let result = ''
  let total = 0
  for (let i = 0; i <= num; i++) {
    total += i
    result = result += i === num ? `${i}` : `${i}+`
  }
  // console.log(total)
  return (result += ` = ${total}`)
}
console.log(sumNum(number))

// "0+1+2+3+4+5+6 = 21"

// var SequenceSum = (function () {
//   function SequenceSum() {}

//   SequenceSum.showSequence = function () {}

//   return SequenceSum
// })()

// console.log(SequenceSum(6))
