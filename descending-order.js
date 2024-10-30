// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

const test = 42145
const descending = (num) => {
  const numStr = num.toString()

  return +numStr
    .split('')
    .sort((a, b) => b - a)
    .join('')
}

console.log(descending(test))
