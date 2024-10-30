// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

const test = 'coDe'
function solve(s) {
  let uppercount = 0
  let lowercount = 0
  const strArr = s.split('')

  strArr.map((el) => {
    el === el.toUpperCase() ? uppercount++ : lowercount++
  })

  let newStr =
    uppercount === lowercount ? strArr.map((el) => el.toLowerCase()) : strArr

  if (uppercount > lowercount) {
    newStr = strArr.map((el) => el.toUpperCase())
  }

  if (lowercount > uppercount) {
    newStr = strArr.map((el) => el.toLowerCase())
  }
  newStr
  console.log(uppercount, lowercount)
  return newStr.join('')
}
console.log(solve(test))
