// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

const test = 5

const series = (num) => {
  if (num === 0) return 0
  let total = 0
  let den = 1

  for (let i = 1; i <= num; i++) {
    total += 1 / den
    den += 3
  }
  const result = `${total.toFixed(2)}`
  console.log(result)
  return result
}

console.log(series(test))
