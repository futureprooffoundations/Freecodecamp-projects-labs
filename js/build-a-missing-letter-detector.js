function fearNotLetter (string) {
  let fullLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase();
  let state = undefined;
  let indexOfFirstLetter= fullLetters.indexOf(string[0]);
  let extractedLetters =fullLetters.slice(indexOfFirstLetter);


  for (let word of extractedLetters) {
   
   if (string.includes(word)===false){
      state = word;
    break; 
  }
  }
  return state;}
  

console.log(fearNotLetter("stvwx"))