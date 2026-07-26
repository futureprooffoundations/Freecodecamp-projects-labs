

function pairElement(str) {
 let array = [];
 for (let i of str) {
  let pair = [i];
  if (i=== "A") {
pair.push("T");
  }
  if (i=== "C") {
pair.push("G");
  }
  if (i=== "T") {
pair.push("A");
  }
  if (i=== "G") {
pair.push("C");
  }
  array.push(pair)
}
return array;
}

console.log(pairElement("ATCGA"))
console.log(pairElement("TTGAG"))
console.log(pairElement("CTCTA"))
