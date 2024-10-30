//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29

const test = 4

const sumConsecutive = (num) => {
  let total = 0
  let i = 1
  let loopCount = 1
  const numLength = `${num}`.length
  let startnum = 1
  while (loopCount <= num - 1) {
    for (i = 1, startnum; i <= loopCount; i += 1) {
      console.log(startnum)
      startnum += 2
    }
    loopCount++
  }

  console.log(loopCount)
  let numArr = []
  for (let counter = 1; counter <= num; counter++) {
    console.log(startnum)
    numArr.push(startnum)
    startnum += 2
  }
  console.log(numArr)
  const sumTotal = numArr.reduce((acc, el) => acc + el, 0)
  return sumTotal
}

console.log(sumConsecutive(test))
