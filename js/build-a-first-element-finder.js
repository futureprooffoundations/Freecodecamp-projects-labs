function findElement  (array, func) {
  let x;
  for (let i=0; i<array.length; i++) {
    let y =func(array[i]);
    if (y == true) {
      x= array[i];
      break;
    }
  }
  return x
  
}
console.log(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }))