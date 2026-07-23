function frankenSplice (array1, array2, index) {
  let one =[...array1];
  let two =[...array2];
  for (let i=one.length - 1; i>=0; i--){
    two.splice(index,0,one[i])
  }
  return two;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1))