function whatIsInAName (arr, obj){
const key = Object.keys(obj)
const value= Object.values(obj)

let match = [];
for (let i=0; i<arr.length; i++){
  for (let x of key){
    console.log(x)
    for (let y of value){
  if (arr[i][x]=== y){
    console.log(x)
match.push(arr[i])
  }}
}}
return match;
}

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }))