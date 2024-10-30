// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

const names = ['Alex', 'Jacob', 'Mark', 'Max']

const likes = (arr) => {
  let message = ''

  if (arr.length === 0) message = 'no one likes this'
  if (arr.length === 1) message = `${arr[0]} likes this`
  if (arr.length === 2) message = `${arr.join(' and ')} like this`
  if (arr.length === 3)
    message = `${arr[0]}, ${arr.slice(1, 3).join(' and ')} like this`

  if (arr.length > 3)
    message = `${arr.slice(0, 2).join(', ')} and ${
      arr.length - 2
    } others like this`

  return message
}

console.log(likes(names))

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
