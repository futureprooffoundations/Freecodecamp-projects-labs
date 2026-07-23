const questions = [ {
  category :"horor" ,
  question: "whats your favourate film ?",
  choices: [ "Abdullah story", "Mohammed story", "Reda story"],
  answer: "Abdullah story",
}, {category :"horor" ,
  question: "whats your favourate film ?",
  choices: [ "Abdullah story", "Mohammed story", "Reda story"],
  answer: "Abdullah story",},{category :"horor" ,
  question: "whats your favourate film ?",
  choices: [ "Abdullah story", "Mohammed story", "Reda story"],
  answer: "Abdullah story"},{category :"horor" ,
  question: "whats your favourate film ?",
  choices: [ "Abdullah story", "Mohammed story", "Reda story"],
  answer: "Abdullah story",}, {category :"horor" ,
  question: "whats your favourate film ?",
  choices: [ "Abdullah story", "Mohammed story", "Reda story"],
  answer: "Abdullah story",}];

function getRandomQuestion(array) {
  let b = array.length
  return array[Math.floor(Math.random() * b)];
};



function getRandomComputerChoice(array) {
  let b = array.length
return array[Math.floor(Math.random() * b)]
};



function getResults (questionObject, computerChoice){
if (computerChoice===questionObject.answer) {
  return "The computer's choice is correct!"
}
else {
  return `The computer's choice is wrong. The correct answer is: ${questionObject.answer}`
};
};

console.log(getResults(questions[0], "Abdullah story"))