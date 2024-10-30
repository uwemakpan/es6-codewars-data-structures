// divisors(12) --> [2, 3, 4, 6]
// divisors(25) --> [5]
// divisors(13) --> "13 is prime"

const num = 25

const divisors = (test) => {
  let count = 0
  let result = ''
  let divArray = []
  for (let i = 2; i < test; i++) {
    if (test % i === 0) {
      // count++
      divArray.push(i)
    }
  }
  const message = divArray.length === 0 ? `${test} is prime` : divArray
  console.log(message)
  return message
}
console.log(divisors(num))
