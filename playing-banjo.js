// name + ' plays banjo'
// name + ' does not play banjo'

const n = 'tei'

function areYouPlayingBanjo(name) {
  let message = ''
  const isR = name.split('')[0].toLowerCase() === 'r'
  message = isR ? `${name} plays banjo` : `${name} does not play banjo`
  // Implement me
  return message
}

console.log(areYouPlayingBanjo(n))

console.log('Razak'.startsWith('R'))

const val = 10
let valArr = []
for (let i = 1; i <= val; i++) {
  valArr.push(i)
}
console.log(valArr)

const testNum = 8
let totaltest = 0
for (let i = 1; i <= testNum; i++) {
  totaltest += i
}
console.log(totaltest)

var questions = [
  {
    question: "What's the currency of the USA?",
    choices: ['US dollar', 'Ruble', 'Horses', 'Gold'],
    corAnswer: 0,
  },
  {
    question: 'Where was the American Declaration of Independence signed?',
    choices: ['Philadelphia', 'At the bottom', "Frankie's Pub", 'China'],
    corAnswer: 0,
  },
]
