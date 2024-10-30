// 1,2,2 -> true
// 4,2,3 -> true
// 2,2,2 -> true
// 1,2,3 -> false
// -5,1,3 -> false
// 0,2,3 -> false
// 1,2,9 -> false

const isTriangle = (a, b, c) => {
  let numArr = [a, b, c]
  for (el of numArr) {
    if (el <= 0) false
  }
  let max = numArr[0]

  numArr.map((el) => {
    if (el > max) max = el
  })

  const newArr = numArr.filter((el, ix) => ix !== numArr.indexOf(max))
  console.log(newArr)

  const sumNewArr = newArr.reduce((acc, el) => acc + el, 0)
  return sumNewArr > max
}

console.log(isTriangle(0, 2, 3))
// -> true
// 4,2,3 -> true
// 2,2,2 -> true
// 1,2,3 -> false
// -5,1,3 -> false
// 0,2,3 -> false
// 1,2,9 -> false
