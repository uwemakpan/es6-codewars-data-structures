// '1 sheep...2 sheep...3 sheep...'

const count = 3

const countsheep = (numcount) => {
  let message = ''

  for (let i = 1; i <= numcount; i++) {
    message += `${i} sheep...`
  }
  return message
}

console.log(countsheep(count))
