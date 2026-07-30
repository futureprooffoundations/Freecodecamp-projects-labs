// correct but the file implement-an-odd-fibonacci-sum-after-Ai-2.js is more accurate and better than this one

function sumFibs(num) {
  let fibS = [0, 1];
  let sum = 0;
  if (num <= 0) {
    return 0;
  } else {
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
}
console.log(sumFibs(56));
console.log(sumFibs(0));
console.log(sumFibs(1));
console.log(sumFibs(2));
