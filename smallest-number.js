// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345

const test = [34, -345, -1, 100]
const getSmallestNumber = (list) => {
  let countSmallest = 0
  let smallest = list[0]
  let smallestArr = []
  let totalSmallest = 0

  for (let counter = 1; counter <= 2; counter++) {
    list.map((el) => {
      if (el < smallest) smallest = el
    })
    return smallest
  }
}
console.log(getSmallestNumber(test))
