function pyramid (str, int, bool) {
let r=`\n`;
if (bool === true){
  let y=0;
  let y2=int +int-1
  for (let i=int; i>0; i--){
let x=str.repeat(y2)
let z=" ".repeat(y)
 r += z + x+ "\n"
y++
y2-=2
  }
}
if ((bool === false)) {
  let y = 1
  let y2=int-1
  for(let i=0; i<int; i++) {
    let x=str.repeat(y)
    let z=" ".repeat(y2)
  
      r+= z + x+ "\n"
    
    y+=2
    y2-=1
  }
}
return r
}

console.log(pyramid ("o", 4, false))
console.log("\n   o\n  ooo\n ooooo\nooooooo\n")