function dropElements(arr, func) {
  let r = [...arr];
  for (let i of arr) {
    if (func(i) === true) {
      break;
    } else {
      r.shift();
    }
  }
  return r;
}

console.log(dropElements([0, 1, 0, 1], function(n) { return n === 1; }));
// [1, 0, 1]