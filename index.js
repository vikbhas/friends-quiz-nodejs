const chalk = require('chalk');
var readlineSync = require("readline-sync");

var score = 0;

var userName = readlineSync.question("Enter Your Name : ");

console.log("Welcome "+ chalk.underline.bgBlue(userName));


// data of high score
var highScores = [
  {
    name: "Manoj",
    score: 5,
  },

  {
    name: "Bhas",
    score: 5,
  },
]

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Correct!");
    score = score + 1;
    
  } else {
    console.log("Oops!");
   
  }

  console.log("Current score: ", score);
}

var questions = [{
  question: "What is Chandler's middle name? ",
  answer: "muriel"
}, {
  question: "What is the name of monica's son? ",
  answer: "jack"
},
{
  question: "Who is joey's bed time pal? ",
  answer: "hugsy"
},
{
  question: "What is Rachel scared of? ",
  answer: "swings"
},
{
  question: "What's the name of the dancer Joey lived with?",
  answer: "janine"
}];

for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
  
  if (i < ((questions.length)-1)){
    console.log("Nex Question");
  }
  
}

console.log("Your score: ", score);
