// 121 --> 144
// 625 --> 676
// 114 --> -1

const num = 114

const isPerfectSquare = (test) => {
  let temp = test
  let loop = true
  let result

  if (test % Math.sqrt(test) !== 0) {
    return -1
  }
  let next = test
  if (next % Math.sqrt(test) === 0) {
    next++
    while (loop) {
      if (next % Math.sqrt(next) === 0) {
        return next
      } else next++
    }
  }
}

console.log(isPerfectSquare(num))
