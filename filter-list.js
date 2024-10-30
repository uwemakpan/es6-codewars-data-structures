// filter_list([1, 2, 'a', 'b']) == [1, 2]
// filter_list([1, 'a', 'b', 0, 15]) == [1, 0, 15]
// filter_list([1, 2, 'aasf', '1', '123', 123]) == [1, 2, 123]

const test = [1, 'a', 'b', 0, 15]
const filterList = (list) => {
  return list.filter((el) => typeof el === 'number')
}

console.log(filterList(test))
