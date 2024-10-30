// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"

const objs = ['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']

const needle = (items) => {
  const found = items.findIndex((el) => el === 'needle')

  const message = `found the needle at position ${found}`

  console.log(found)
  console.log(message)
  return message
}

console.log(needle(objs))
