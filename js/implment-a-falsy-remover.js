function bouncer (array) {
let copy=[];
let not = [false, null, 0, NaN, undefined, ""];
for (let i=0; i<array.length; i++) {
  if (!not.includes(array[i])) {
    copy.push(array[i]);
  }
}
return copy
}

console.log(bouncer([false, null, 0, NaN, undefined, ""]))
console.log(bouncer([7, "ate", "", false, 9]))
