const present = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
]

const count = present.filter((el) => el === true).length
console.log(count)

// "GCAT"  =>  "GCAU"
const val = 'GCAT'

const DNAconverter = (first) => {
  const firstArr = first.split('')
  console.log(firstArr)
  const converted = firstArr.map((el) => {
    const restult = el.toLowerCase() === 't' ? 'U' : el
    return restult
  })
  const second = converted.join('')

  console.log(second)
  return second
}
console.log(DNAconverter(val))
