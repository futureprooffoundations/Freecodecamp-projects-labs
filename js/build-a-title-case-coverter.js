function titleCase(string) {
  let smallLeterrs = string.toLowerCase();
  let array = smallLeterrs.split(" ")
  let capital = [];
  for (let word of array) {
    let firstlettrCap =word[0].toUpperCase();
    let wordC = word.split("");
    wordC[0] = firstlettrCap;
    wordC = wordC.join("");
    capital.push(wordC)
  }
  capital = capital.join(" ")
  return capital;
}

console.log(titleCase("I'm a little tea pot"))