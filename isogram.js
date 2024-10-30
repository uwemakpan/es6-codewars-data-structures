// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

const test = 'moOse'
const isIsogram = (word) => {
  const lower = word.split('').map((el) => el.toLowerCase())
  const wordSet = new Set(lower)

  console.log(lower)
  console.log(wordSet)
  return lower.length === wordSet.size
}

console.log(isIsogram(test))
