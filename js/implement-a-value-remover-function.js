function destroyer(arr){
  let arg=[];
  for (let i= arguments.length; i >0 ; i--){
if (arguments[i] === undefined){
continue;
}
else{
arg.push(arguments[i])
  }  }
  const dest = arr.filter((ar)=> !arg.includes(ar))
  return dest
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))