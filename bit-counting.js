// Code to count the number of 1's
// const quotient = 0

const bitCounter = (num) => {
  let remArr = []
  while (num > 0) {
    const quotient = Math.floor(num / 2)
    const remainder = num % 2
    remArr.push(remainder)
    num = quotient
  }

  let counter = 0
  const total = remArr.reduce((acc, el) => acc + (el === 1 ? 1 : 0), 0)
  // console.log(total)
  return total
}

console.log(bitCounter(1234))

// console.log(1234 / 2)
// console.log(617 / 2)
// console.log(1234 % 2)

// console.log(Math.floor(617 / 2))
// console.log(617 % 2)
