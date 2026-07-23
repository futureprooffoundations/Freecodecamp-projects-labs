let count = 0;
function cardCounter(card) {
 { if (card>=2 && card<=6) {
    ++count ;
  }
  else if (card>=7 && card<=9) {
    count;
  }
  else {
    --count;
  }}
  if (count>0) {
    return String(count) + " Bet";
  }
  else {
    return String(count) + " Hold";
  }
}

console.log(cardCounter(7))