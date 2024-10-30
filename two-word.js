// Sam Harris => S.H

// patrick feeney => P.F

const name = 'patrick feeney'

const initials = (test) => {
  const testArr = `${test}`.split(' ')
  console.log(testArr)

  let initials = []
  for (el of testArr) {
    initials.push(`${el}`.split('')[0].toUpperCase())
  }
  console.log(initials)
  initials = initials.join('.')
  console.log(initials)
  return initials
}

console.log(initials(name))

// 1705 --> 18
// 1900 --> 19
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
// 2742 --> 28
const t = 957780
console.log(t % 100 > 0 ? (t < 100 ? 1 : Math.floor(t / 100) + 1) : t / 100)

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

const time = 11.8
console.log(Math.floor(time * 0.5))
