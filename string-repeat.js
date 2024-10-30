// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

const test = 'I'
const repeat = (n, str) => {
  let newArr = []
  for (let i = 1; i <= n; i++) newArr.push(str)

  const result = newArr.join('')
  console.log(result)

  return result
}

console.log(repeat(5, test))
