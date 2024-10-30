// program to count multiples of 3 or 5

const num = 10
const multiple = (num) => {
  if (num < 0) return 0
  let start = 0
  let count = 0
  for (start = 0; start < num; start++) {
    if (start % 3 === 0 || start % 5 === 0) count += start
  }
  // console.log(count)
  return count
}

console.log(multiple(num))
console.log(multiple(10))
console.log(multiple(-10))
