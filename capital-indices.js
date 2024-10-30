// "CodEWaRs" --> [0,3,4,6]

const word = 'CodEWaRs'

const capindices = (word) => {
  let indices = []
  word.split('').filter((el) => {
    if (el === el.toUpperCase()) indices.push(word.indexOf(el))
  })
  return indices
}

console.log(capindices(word))
