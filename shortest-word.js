// Simple, given a string of words, return the length of the shortest word(s).

const test = 'He that dwelleth in the secret place'

const getShortestWordLength = (word) => {
  const lengths = word.split(' ').map((el) => el.length)
  const min = lengths[0]
  lengths.map((el) => {
    if (el < min) min = el
  })
  console.log(lengths)
  return min
}

console.log(getShortestWordLength(test))
