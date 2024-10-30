// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
const test = 'test'
function getMiddle(s) {
  const len = s.split('').length
  let result =
    len % 2 === 0
      ? s.split('').splice(Math.floor(len / 2) - 1, 2)
      : s.split('').splice(Math.floor(len / 2), 1)
  result = result.join('')
  //Code goes here!

  return result
}

console.log(getMiddle(test))
console.log('test'.split('').splice(2, 1))
