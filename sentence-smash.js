// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

const sentence = ['hello', 'world', 'this', 'is', 'great']

const smash = (sent) => {
  return sent.join(' ')
}

console.log(smash(sentence))
