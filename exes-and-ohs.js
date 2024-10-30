// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

const test = 'zzoo'

const checkX = (str) => {
  let countX = 0
  let countY = 0

  str.split('').map((el) => {
    if (el.toLowerCase() === 'x') {
      countX++
    }
    if (el.toLowerCase() === 'o') {
      countY++
    }
  })
  return countX === countY || (countX === 0 && countY === 0) ? true : false
}

console.log(checkX(test))
