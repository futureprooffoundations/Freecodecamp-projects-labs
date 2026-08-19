function getIndexToIns(array, number) {
  let sorted = array.sort((a, b) => a - b);
  let lowestIndex = sorted.findIndex((i) => i >= number);

  return lowestIndex === -1 ? sorted.length : lowestIndex;
}

console.log(getIndexToIns([], 5));
console.log(getIndexToIns([3, 10, 5], 11));
