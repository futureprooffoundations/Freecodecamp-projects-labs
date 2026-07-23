function mutation (array) {
  

const firstword = array[0].toLowerCase();
  let setuation = true;

  for (const char of array[1].toLowerCase()) {
    if (firstword.includes(char)===false) {
      setuation = false
    }
  }
  return setuation;
}