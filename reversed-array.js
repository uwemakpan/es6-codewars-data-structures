// 35231 => [1,3,2,5,3]
// 0 => [0]

const num = 35231

const reversedIntArray = (digits) => {
  const strDigits = `${digits}`.split('').reverse()
  console.log(typeof strDigits)

  console.log(strDigits)
  const intArrayDigits = strDigits.map((el) => +el)
  // console.log(intArrayDigits)
  return intArrayDigits
}

console.log(reversedIntArray(num))
