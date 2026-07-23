function chunkArrayInGroups(array, number){
  let groups=[];
  let b=Math.ceil(array.length/number)
  
  for (let i=0; i<b; i++) {
 let removed= array.splice(number,number)
 
  if (removed.length === 0)
  {
    break;
  }
  else {
    groups.push(removed)
  }
  }
  groups.unshift(array)
  return groups
  
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4))