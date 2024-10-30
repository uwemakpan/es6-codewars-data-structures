// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"

const age = 18

const drink = (num) => {
  let message = ''
  if (num < 14) message = 'drink toddy'
  if (num >= 14 && num < 18) message = 'drink coke'
  if (num >= 18 && num < 21) message = 'drink beer'
  if (num >= 21) message = 'drink whisky'

  return message
}

console.log(drink(age))
