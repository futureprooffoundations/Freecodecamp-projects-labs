function maskEmail(email) {
  const domain = email.indexOf("@");
 const userName = email.slice(0, domain);
 const first= userName.slice(1, -1);
 const second= first.replace(first, "*".repeat(first.length));
 const firstLetter = userName.slice(0,1);
 const lastLetter = userName.slice(-1)
 const emailDomain = email.slice(domain)
 return firstLetter+second+lastLetter+emailDomain
}
const email = "abdullah@email.com"
console.log(maskEmail(email))