// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0
const test = [1, -4, 7, 12]
const sumPositives = (arr) => {
  let total = 0
  total += arr.filter((el) => el > 0).reduce((acc, el) => acc + el, 0)

  return total
}

console.log(sumPositives(test))
