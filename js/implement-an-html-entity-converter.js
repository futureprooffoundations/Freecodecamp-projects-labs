function convertHTML(str) {
  let obj = {
    "&": "&amp;",
    "<": "&lt;",
    '>': "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  }
  let array = str.split("");
  let array2 =[];
  for  (let s of array) {
    if( obj[s] === undefined ){
      array2.push(s);
    }
    else {
    array2.push(obj[s]);
    }
  }
  return array2.join("")
}

console.log(convertHTML('Stuff in "quotation marks"'))