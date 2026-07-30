// generates 1 if num = 0 which is not correct, should return 0

function sumFibs(num) {
  let fibS = [0, 1];
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    let fibI = fibS[i - 1] + fibS[i];

    if (fibI <= num) {
      fibS.push(fibI);
    } else {
      break;
    }
  }
  for (let int of fibS) {
    if (int % 2 === 1) {
      sum += int;
    }
  }
  return sum;
}

console.log(sumFibs(55));
console.log(sumFibs(0));
console.log(sumFibs(1));
console.log(sumFibs(2));
