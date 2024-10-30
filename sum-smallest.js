// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.\

const test = [10, 343445353, 3453445, 3453545353453]

const sumSmallest = (list) => {
  let countSmallest = 0
  let smallest = list[0]
  let smallestArr = []
  let totalSmallest = 0

  for (let counter = 1; counter <= 2; counter++) {
    console.log(list)
    list.map((el) => {
      if (el < smallest) smallest = el
    })
    // console.log(smallest)
    totalSmallest += smallest
    list = list.filter((el, ix) => ix !== list.indexOf(smallest))
    // console.log(list)
    smallest = list[0]
  }

  return totalSmallest
}

console.log(sumSmallest(test))
