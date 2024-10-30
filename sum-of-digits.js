//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

const numval = 164

const sumDigits = (num) => {
  let loop = true
  let total = 0
  let numStr = `${num}`
  let arr = []

  while (loop) {
    if (numStr.length > 1) {
      for (el of numStr) {
        arr.push(+el)
      }
    }
    // console.log(arr)
    total = arr.reduce((acc, el) => acc + el, 0)
    console.log(total)
    let totalStr = `${total}`
    if (totalStr.length === 1) {
      loop = false
    }

    numStr = totalStr
    arr = []
  }
  // console.log(typeof numStr)

  return total
}

console.log(sumDigits(16))
console.log(sumDigits(942))
console.log(sumDigits(132189))
console.log(sumDigits(493193))

//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
