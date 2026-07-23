function confirmEnding (string1, string2){
  if (string2==string1.slice(-(string2.length))) {
    return true
  }
  else {
    return false
  }
}

console.log(confirmEnding("fuf", "fuck"))
