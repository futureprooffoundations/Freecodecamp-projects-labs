function destroyer(arr, ...args) {
  return arr.filter((el) => !args.includes(el));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));