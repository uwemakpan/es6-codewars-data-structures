// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"
// A == T and C == G

const test = 'GTAT'
const reverseDNA = (str) => {
  const newArr = str
    .split('')
    .map((el) => {
      if (el === 'A') return 'T'
      if (el === 'T') return 'A'
      if (el === 'C') return 'G'
      if (el === 'G') return 'C'
    })
    .join('')
  return newArr
}

console.log(reverseDNA(test))
