const word = 'word'
const reversed = [...word].reverse()
console.log(reversed)

function solution(str) {
  const reversed = [...str].reverse()

  return reversed.join('')
}

console.log(solution('cake'))
