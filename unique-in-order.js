// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD') == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1, 2, 2, 3, 3]) == [1, 2, 3]

const uniqueOrder = (str) => {
  // const str = 'AAAABBBCCDAABBB'
  if (str.length === 0) {
    return []
  } else {
    let distinctArr = []
    let pivot = str[0]
    let add = true
    // console.log(pivot)
    distinctArr.push(pivot)

    for (el of str) {
      if (el === pivot && add) {
        add = false
      }
      if (el !== pivot) {
        distinctArr.push(el)
        add = true
        pivot = el
      }
    }
    // console.log(distinctArr)
    return distinctArr
  }
}

console.log(uniqueOrder('AAAABBBCCDAABBB'))
console.log(uniqueOrder('ABBCcAD'))
console.log(uniqueOrder([1, 2, 2, 3, 3]))
