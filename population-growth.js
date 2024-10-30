// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater than or equal to p = 1200 inhabitants?

const test = 1000

const growthYear = (p0, percent, aug, p) => {
  let total = 0
  total = Math.floor(p0 + p0 * (percent / 100) + aug)
  let count = 1
  while (!(total >= p)) {
    total += Math.floor(total * (percent / 100) + aug)
    count += 1
  }
  return count
}

console.log(growthYear(1000, 2, 50, 1200))
