// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

const test = 1
var isSquare = function (n) {
  let message = false
  if (n < 0) message = false
  if (n === 0) message = true

  for (let counter = 1; counter <= n; counter++) {
    if (Math.pow(counter, 2) === n) {
      message = true
      break
    }
  }

  return message // fix me
}

console.log(isSquare(test))
