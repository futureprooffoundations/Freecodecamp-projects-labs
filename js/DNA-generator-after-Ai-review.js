
function pairElement(str) {
let obj ={"A": "T", "C": "G", "T": "A", "G": "C"}
 let array = [];
for (let i of str) {
  let pair = [i, obj[i]];
  array.push(pair)
}
return array;
}

console.log(pairElement("ATCGA"))
console.log(pairElement("TTGAG"))
console.log(pairElement("CTCTA"))
