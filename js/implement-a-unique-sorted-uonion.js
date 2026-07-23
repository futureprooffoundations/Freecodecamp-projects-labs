function uniteUnique(){
  let unique = [];
  for (let arg of arguments) {
    for (let no of arg) {
      if (!unique.includes(no)){
        unique.push(no);
      }
    }
  }
  return unique
}

console.log(uniteUnique([1, 2, 4], [2, 3, 5]))