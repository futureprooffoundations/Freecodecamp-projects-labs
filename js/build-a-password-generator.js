function generatePassword(length) {
  let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let p = "";
  for (let i=0; i<length; i++) {
    p += char[Math.floor(Math.random()*char.length)];
  }
  return p;
}

let password = generatePassword(10);

console.log(`Generated password: ${password}`)