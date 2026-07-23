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
  let y ="";
  let z;
  let k;
  let f=[];
  let t=[];
  let arrayOfarrays =[];
  if (phraseLength < words.length) {
    for (let i=0; i<words.length; i++){
      let copy =[...words]
    
    arrayOfarrays.push(copy.splice(i,phraseLength ))
    y += `${arrayOfarrays[i]}*`.trim()
    z=y.trim().split("*")
    }

for (let i=0; i<z.length; i++) {
if (k === undefined) {
k += `[${z.splice(i, 1)}]`
z.unshift('')
}
else if(k!=undefined &&z[i].includes && !k.includes(z[i])){
k+= `[${z.splice(i, 1)}]`
z.unshift('')
}
}
for (let words of z){
  if (words!=''){
    f.push(words)
  }
}
    
    for (let w of f){
      let r;
      let x;
      r=w.replace(","," ")
      x=r.split(" ")
      if (x.length==phraseLength){
          t.push(x)
      }
    }
   console.log(t)
if(t.length > 0 && t[0].length > 1)  {
  let g = (words.indexOf(t[0][0]))
  for (let word of t) {
for (let array of arrayOfarrays ){

if (word[0]==array[0] && word[1]==array[1] && arrayOfreaptedWordsIndices.length <= t.length){
arrayOfreaptedWordsIndices.push(words.indexOf(word[0],g++))}

  }
}
}
else if (t.length > 0){
 let g = (words.indexOf(t[0]))
  for (let word of t) {
for (let array of arrayOfarrays ){
  
if (word[0]==array[0] && arrayOfreaptedWordsIndices.length <= t.length){
arrayOfreaptedWordsIndices.unshift(words.indexOf(word[0],g++))}

  }
}}
 
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