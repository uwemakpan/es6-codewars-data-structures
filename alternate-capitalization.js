// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

const test = 'abcdef'

function capitalize(s) {
  const newStr = s.split('').map((el) => el.toLowerCase())
  console.log(newStr)

  const first = newStr
    .map((el, ix) => (ix % 2 === 0 ? el.toUpperCase() : el))
    .join('')

  const second = newStr
    .map((el, ix) => (ix % 2 === 0 ? el : el.toUpperCase()))
    .join('')
  console.log(first)
  console.log(second)

  return [first, second]
}

console.log(capitalize(test))
