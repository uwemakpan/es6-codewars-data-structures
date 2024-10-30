// highAndLow('1 2 3 4 5') // return "5 1"
// highAndLow('1 2 -3 4 5') // return "5 -3"
// highAndLow('1 9 3 4 -5') // return "9 -5"

const test = '1 2 3 4 5'

const highAndLow = (str) => {
  let max = +str.split(' ')[0]
  let min = +str.split(' ')[0]
  console.log(min)
  console.log(max)

  str.split(' ').map((el) => {
    if (+el < min) min = el
    if (+el > max) max = el
  })

  return `${max} ${min}`
}
console.log(highAndLow(test))
