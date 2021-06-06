const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName="";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question="Who was the first American woman in space? ";
let correctAnswer="Sally Ride";
let candidateAnswer="";

let questions=["Who was the first American woman in space? ","True or false: 5 kilometer == 5000 meters? ","(5 + 3)/2 * 10 = ? ","Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ","What is the minimum crew size for the ISS? " ];
let correctAnswers=["Sally Ride","true","40","Trajectory","3"];
let candidateAnswers=[];
let percent;


function askForName() {
  // TODO 1.1b: Ask for candidate's name //

  candidateName= input.question("Please enter your name : ");
  console.log("Candidate Name: ", candidateName);

}



function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for(let i=0; i<questions.length; i++){
    candidateAnswers.push(input.question(questions[i]).toString());
  }

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //  
  let grade=0;
   console.log();
    console.log("Candidate Name: ,", candidateName);
   for(let i=0;i<candidateAnswers.length;i++){

      if(correctAnswers[i].toLowerCase()===candidateAnswers[i].toLowerCase()){
        grade++;

      }

      console.log(` ${i+1}) ${questions[i]}\n Your answer : ${candidateAnswers[i]}     \n Correct answer : ${correctAnswers[i]}\n`); 
    }


 
  percent= (grade/questions.length)*100;
  console.log(`>>>>>>>>>>>> Overall Grade : ${percent} % (${grade} of ${questions.length} responses correct ) <<<<<<<<<< `);

  console.log(`${percent<80 ?" >>>>>>>>> Status : FAILED <<<<<<" : " >>>>>>>>> Status : PASSED <<<<<<"}`);

  return grade*20;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};