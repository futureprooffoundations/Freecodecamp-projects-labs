function getAverage(array) {
  let sum=0;
  for (let a of array){
    sum += a;
  }
 let average = sum/array.length
 return average
}

function getGrade (score) {
  if (score === 100) {
    return "A+";
  }
  if (score >= 90) {
    return "A";
  }
  if (score >= 80 && score < 90) {
    return "B";
  }
  if (score >= 70 && score < 80) {
    return "C";
  }
  if (score >= 60 && score < 70) {
    return "D";
  }
  if (score < 60) {
    return "F";
  }
}

function hasPassingGrade (score) {
  let grade = getGrade(score);
  if (grade ==="F") {
    return false
  }
  else {
    return true
  }
}

function studentMsg (arrOfScores, studentScore) {
  let pOrF = hasPassingGrade(studentScore)
  let avg = getAverage(arrOfScores)
  let grade = getGrade(studentScore)
  if (pOrF === true) {
   return `Class average: ${avg}. Your grade: ${grade}. You passed the course.`
  }
  else {
    return `Class average: ${avg}. Your grade: ${grade}. You failed the course.`
  }

}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37))