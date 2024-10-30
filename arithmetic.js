// 5, 2, "add"      --> 7
// 5, 2, "subtract" --> 3
// 5, 2, "multiply" --> 10
// 5, 2, "divide"   --> 2.5

// const arithmetic = (a, b, operator) => {
//   //your code here!
//   let result = ''
//   switch (operator) {
//     case 'add':
//       result = a + b
//       break

//     case 'subtract':
//       result = a - b
//       break

//     case 'multiply':
//       result = a * b
//       break

//     case 'divide':
//       result = a / b
//       break
//   }

//   return result
// }

// console.log(arithmetic(5, 2, 'multiply'))

const arithmetic = (operator, a, b) => {
  //your code here!
  let result = ''
  switch (operator) {
    case '+':
      result = a + b
      break

    case '-':
      result = a - b
      break

    case '*':
      result = a * b
      break

    case '/':
      result = a / b
      break
  }

  return result
}

console.log(arithmetic('/', 5, 2))
