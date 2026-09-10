function whatIsInAName (arr, obj){
let value = JSON.stringify(obj).replaceAll(/[{}]/g, "").split(",")
console.log(value)
let match = arr.filter((ob) => value.every((n) => JSON.stringify(ob).includes(n)))
return match;
}



