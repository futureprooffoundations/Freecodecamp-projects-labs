function diffArray(arr1, arr2) {
  const d = arr1.filter((char) => !arr2.includes(char));
  const c = arr2.filter((char) => !arr1.includes(char));
  return [...d, ...c];
}

console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]));