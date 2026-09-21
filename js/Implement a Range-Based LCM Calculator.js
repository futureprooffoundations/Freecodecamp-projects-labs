function smallestCommons (arr) {
  arr.sort((a,b) => a-b)
  let arrb =[]
  for (let i=arr[0]; i<=arr[1]; i++){
    arrb.push(i);
  }
  
  let lcm = arr[1];
  
for (let i=0 ; i<1000000; i++) {
  let add = 0;
  for ( let a of arrb){
    if (lcm % a != 0){
      add += 1;
      break;
    }
  }
  if (add == 1) {
    lcm += arr[1];
  }
  else {
    break;
  }
}
  return lcm ;
}

console.log(smallestCommons ([5,1]))

