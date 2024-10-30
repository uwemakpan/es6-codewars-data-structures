// if oscar was (integer) 88, you have to return "Leo finally won the oscar! Leo is happy".
// if oscar was 86, you have to return "Not even for Wolf of wallstreet?!"
// if it was not 88 or 86 (and below 88) you should return "When will you give Leo an Oscar?"
// if it was over 88 you should return "Leo got one already!"

const value = 88

const oscar = (val) => {
  let result = ''
  if (val === 88) result = 'Leo finally won the oscar! Leo is happy'
  if (val === 86) result = 'Not even for Wolf of wallstreet?!'
  if (val !== 86 && val !== 88 && val < 88)
    result = 'When will you give Leo an Oscar?'
  if (val > 88) result = 'Leo got one already!'

  return result
}

console.log(oscar(value))
