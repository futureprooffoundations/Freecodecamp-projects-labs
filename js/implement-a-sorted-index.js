function getIndexToIns(array, number){
  let sorted = array.sort((a, b) => a-b);
  let lowestIndex = sorted.findIndex((i) =>  i >= number | 0);
  if (lowestIndex == -1){
    return sorted.length
  }
  else{
  return lowestIndex;}

}

console.log(getIndexToIns([], 5))
console.log(getIndexToIns([3, 10, 5], 11))