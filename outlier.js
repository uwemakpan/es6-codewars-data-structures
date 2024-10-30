// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

const arr = [2, 4, 0, 100, 4, 11, 2602, 36]
const outlier = (numArray) => {
  let even = 0
  let odd = 0
  let result = null
  let isEven = null
  let isOdd = null

  for (el of numArray) { 
    if (el % 2 === 0) {
      even++
      isEven = el
    } else {
      odd++
      isOdd = el
    }

    if ((even > 1) & (isOdd !== null)) {
      result = isOdd
      break
    }
    if ((odd > 1) & (isEven !== null)) {
      result = isEven
      break
    }
  }
  return result
}

console.log(outlier(arr))
