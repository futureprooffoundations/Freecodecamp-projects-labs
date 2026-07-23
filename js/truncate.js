function truncateString (string, num) {
  if (string.length > num) {
    
    const b= string.slice(0, num);
    return b + "..."
  } else {
    return string
  }
}

console.log(truncateString("Abdullah", 4));