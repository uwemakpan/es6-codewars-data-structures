// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

const test = [2, 2, 1, 2, 1]

const removeMinimum = (arr) => {
  let min = arr[0]

  for (let el of arr) {
    if (el < min) min = el
  }

  const finalArray = arr.filter((el, ix) => ix !== arr.indexOf(min))
  // console.log(finalArray)
  return finalArray
}

console.log(removeMinimum(test))
