function repeatStringNumTimes(string, number) {
  let results = "";
  if (number > 0) {
    for (let i = 0; i < number; i++) {
      results += string;
    }
    return results;
  } else {
    return "";
  }
}

console.log(repeatStringNumTimes("*", 3));

console.log(repeatStringNumTimes("abc", 1));
