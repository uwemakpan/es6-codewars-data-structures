// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
const test = 'RqaEzty'
function accum(s) {
  // your code
  let result = []
  const strArr = s.split('').map((el) => el.toLowerCase())
  console.log(strArr)

  let loopCount = 1
  for (el of strArr) {
    let str = ''
    for (let counter = 1; counter <= loopCount; counter++) {
      str += counter === 1 ? el.toUpperCase() : el.toLowerCase()
    }
    loopCount++
    result.push(str)
  }
  result = result.join('-')
  return result
}

console.log(accum(test))
