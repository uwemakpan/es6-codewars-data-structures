//You got this!
// return
const anything = 'plate'

const removeChar = (str) => {
  const frist = str.split('')
  console.log(frist)
  const second = frist.filter((el, ix) => ix !== 0 && ix !== frist.length - 1)
  console.log(second)
  return second.join('')
}

console.log(removeChar(anything))
