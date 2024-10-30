// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

const test = '4556364607935616'
const maskify = (str) => {
  let masked = ''
  const split = str.split('')
  console.log(split)
  masked =
    split.length <= 4
      ? str
      : split.map((el, ix) => (ix < split.length - 4 ? '#' : el)).join('')
  return masked
}

console.log(maskify(test))
