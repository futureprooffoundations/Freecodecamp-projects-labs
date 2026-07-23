function findLongestWordLength(string) {
  const words = string.trim().split(" ")
  let longestWord= 0;

    for (let i=0 ; i < words.length; i++){
    
      if (words[i].length > longestWord) {
        longestWord = words[i].length;
      }
     
}
 return longestWord
}
