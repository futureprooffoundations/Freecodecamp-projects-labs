function isPalindrome (word) {
  const wordToLowerCase = word.toLowerCase()
  const wordReverse = wordToLowerCase.split("").reverse().join("");
  const palindromeIs = wordToLowerCase.includes(wordReverse) 
  
  return palindromeIs;
}

function findPalindromeBreaks (words) {
  let arrayOfwords = [];
  let indexOfLastWord=0;
  if (words !== undefined) {
    for (let word of words) {
      if (isPalindrome (word) === false) {
        let wordIndex = words.indexOf(word, indexOfLastWord)
        indexOfLastWord = wordIndex 
        arrayOfwords.push(wordIndex)
        indexOfLastWord++
      }
    }
  }
  return arrayOfwords;
}



function findRepeatedPhrases (words, phraseLength) {
  let arrayOfreaptedWordsIndices = [];
  let objectTest = {};


  for (let i=0; i<=words.length - phraseLength ; i++){
    const phrase = words.slice(i, i+phraseLength).join(' ');
    if (objectTest[phrase]==undefined){
        objectTest[phrase]=[i];
    }
    else{
    objectTest[phrase].push(i) ;
    }
  }
  

for (let i=0; i<=words.length-phraseLength ;i++) {
    const phrase= words.slice(i, i+phraseLength).join(' ');
    if (objectTest[phrase].length > 1) {
        arrayOfreaptedWordsIndices.push(i);
    }
}
  
 

return arrayOfreaptedWordsIndices
}

console.log( findRepeatedPhrases (["the", "cat", "sat", "the", "cat"], 2))


function analyzeTexts (texts, phraseLength) {
 const textsArray =[];
 if (texts.length > 0) {
  for (let words of texts){
  let palindromeBreaks = findPalindromeBreaks (words);
  let repeatedPhrases =findRepeatedPhrases (words, phraseLength);
  let obj = {
  palindromeBreaks, 
  repeatedPhrases
  };
  textsArray.push (obj)

 }
}
return textsArray 
}

console.log(analyzeTexts([["racecar", "hello"], ["level", "world", "level"]], 1))