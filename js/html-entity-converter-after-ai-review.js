function convertHTML(str) {
  let obj = {
    "&": "&amp;",
    "<": "&lt;",
    '>': "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  }
  let array2 =[];
  for  (let s of str) {
    
    array2.push(obj[s] || s);
  }
  return array2.join("")
}

console.log(convertHTML('Stuff in "quotation marks"'))