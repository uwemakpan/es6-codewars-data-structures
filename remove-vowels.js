const test = 'This website is for losers LOL!'

function disemvowel(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  str = str
    .split('')
    .filter((el) => !vowels.includes(el.toLowerCase()))
    .join('')
  return str
}

console.log(disemvowel(test))
