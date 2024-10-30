const findOdd = (intArray) => {
  // const intArray = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]

  const unique = new Set(intArray)
  console.log(unique)
  for (el of unique) {
    const total = 0
    const countEl = intArray.filter((num) => num === el).length
    if (countEl % 2 > 0) return el
  }
}

console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]))
console.log(findOdd([7]))
console.log(findOdd([0]))
console.log(findOdd([1, 1, 2]))
console.log(findOdd([0, 1, 0, 1, 0]))

// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times
